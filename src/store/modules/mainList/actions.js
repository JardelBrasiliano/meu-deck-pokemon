export function listPokemonRequest({ page }) {
  return {
    type: '@listPokemon/LIST_POKEMON_REQUEST',
    payload: { page },
  };
}

export function listPokemonSuccess({ list }) {
  return {
    type: '@listPokemon/LIST_POKEMON_SUCCESS',
    payload: { list },
  };
}

export function listPokemonFailure() {
  return {
    type: '@listPokemon/LIST_POKEMON_FAILURE',
  };
}
