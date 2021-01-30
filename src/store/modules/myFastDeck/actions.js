export function addPokemonInDeckFestRequest({ pokemon }) {
  return {
    type: '@myFastDeck/ADD_POKEMON_REQUEST',
    payload: { listPokemon: pokemon },
  };
}

export function removePokemonInDeckFestRequest({ pokemon, listPokemon }) {
  return {
    type: '@myFastDeck/REMOVE_POKEMON_SUCCESS',
    payload: { pokemon, listPokemon },
  };
}

export function newListPokemonInDeckFestRequest({ authList }) {
  return {
    type: '@myFastDeck/NEW_POKEMON_SUCCESS',
    payload: { listPokemon: authList },
  };
}
