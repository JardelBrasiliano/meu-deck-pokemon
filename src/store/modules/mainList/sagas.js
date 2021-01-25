import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import apiListPokemon from '../../../services/apiListPokemon';

export function* listPokemon({ payload }) {
  try {
    const { page } = payload;
    const offSet = 8 * page - 8;
    const limit = 8;
    const { data } = yield call(
      apiListPokemon.get,
      `/pokemon-form/?offset=${offSet}&limit=${limit}`,
    );
    const listInitial = data.results;
    // Pegando dados da api com "yield all" para usar o .map e percorrer todas as informações.
    const listPokeminFinal = yield all(
      listInitial.map((pokemon) =>
        call(apiListPokemon.get, `/pokemon-form/${pokemon.name}`),
      ),
    );
    // Essa parte de baixo deve ser tratana no redurce, pois o saga é apenas para puxar dados da api
    const organizedListFinal = listPokeminFinal.map((pokemon) => {
      const perfilPokemon = {
        name: pokemon.data.name
          .substring(0, 1)
          .toUpperCase()
          .concat(pokemon.data.name.substring(1)),
        image: pokemon.data.sprites.front_default,
      };
      return perfilPokemon;
    });

    yield put(actions.listPokemonSuccess({ list: organizedListFinal }));
  } catch (err) {
    yield put(actions.listPokemonFailure());
  }
}

export default all([
  takeLatest('@listPokemon/LIST_POKEMON_REQUEST', listPokemon),
]);
