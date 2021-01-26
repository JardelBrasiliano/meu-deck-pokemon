export function addPokemonInDeckFestRequest({ pokemon }) {
  return {
    type: '@myFastDeck/ADD_POKEMON_REQUEST',
    payload: { listPokemon: pokemon },
  };
}

export function removePokemonInDeckFestRequest({ pokemon }) {
  return {
    type: '@myFastDeck/REMOVE_POKEMON_SUCCESS',
    payload: { pokemon },
  };
}
