export const types = {
  LISTPOKEMON: {
    REQUEST: '@listPokemon/LIST_POKEMON_REQUEST',
    SUCCESS: '@listPokemon/LIST_POKEMON_SUCCESS',
    FAILURE: '@listPokemon/LIST_POKEMON_FAILURE',
  },
};

export function listPokemonRequest({ page }) {
  return {
    type: types.LISTPOKEMON.REQUEST,
    payload: { page },
  };
}

export function listPokemonSuccess({ list }) {
  return {
    type: types.LISTPOKEMON.SUCCESS,
    payload: { list },
  };
}

export function listPokemonFailure() {
  return {
    type: types.LISTPOKEMON.FAILURE,
  };
}
