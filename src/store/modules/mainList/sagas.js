import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';

import apiListPokemon from '../../../services/apiListPokemon';

export function* listPokemon({ payload }) {
  try {
    const { page } = payload;
    const offSet = 8 * page - 8;
    const limit = 8;

    if (!Number.isNaN(offSet)) {
      const { data } = yield call(
        apiListPokemon.get,
        `/pokemon-form/?offset=${offSet}&limit=${limit}`,
      );

      const listInitial = data.results;

      yield put(actions.listPokemonSuccess({ list: listInitial }));

      const listPokeminFinal = yield all(
        listInitial.map((pokemon) =>
          call(apiListPokemon.get, `/pokemon-form/${pokemon.name}`),
        ),
      );

      const organizedListFinal = listPokeminFinal.map((pokemon) => {
        const perfilPokemon = {
          name: pokemon.data.name,
          image: pokemon.data.sprites.front_default,
        };
        return perfilPokemon;
      });

      yield put(actions.listPokemonSuccess({ list: organizedListFinal }));
    } else {
      yield put(actions.listPokemonSuccess({ list: [] }));
    }
  } catch (err) {
    yield put(actions.listPokemonFailure());
  }
}

export default all([
  takeLatest('@listPokemon/LIST_POKEMON_REQUEST', listPokemon),
]);
