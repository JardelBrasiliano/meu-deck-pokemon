export function resetPokemonInDeckFest() {
  return {
    type: '@myFastDeck/RESET_LIST_POKEMON',
  };
}

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

export function newListPokemonInDeckFestRequest(authList) {
  return {
    type: '@myFastDeck/NEW_POKEMON_SUCCESS',
    payload: { listPokemon: authList },
  };
}

export function seedListPokemonFirebaseRequest(authList, token) {
  return {
    type: '@myFastDeck/SEED_FIREBASE_REQUEST',
    payload: { listPokemon: authList, token },
  };
}

export function seedListPokemonFirebaseSuccess() {
  return {
    type: '@myFastDeck/SEED_FIREBASE_SUCCESS',
  };
}
export function seedListPokemonFirebaseFailure() {
  return {
    type: '@myFastDeck/SEED_FIREBASE_FAILURE',
  };
}
