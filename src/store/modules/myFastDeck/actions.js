export const types = {
  RESET: {
    REQUEST: '',
    SUCCESS: '@myFastDeck/RESET_LIST_POKEMON',
    FAILURE: '',
  },
  ADD: {
    REQUEST: '',
    SUCCESS: '@myFastDeck/ADD_POKEMON_LIST',
    FAILURE: '',
  },
  REMOVE: {
    REQUEST: '',
    SUCCESS: '@myFastDeck/REMOVE_POKEMON_LIST',
    FAILURE: '',
  },
  NEW: {
    REQUEST: '',
    SUCCESS: '@myFastDeck/NEW_POKEMON_LIST',
    FAILURE: '',
  },
  SEED_FIREBASE: {
    REQUEST: '@myFastDeck/SEED_FIREBASE_REQUEST',
    SUCCESS: '@myFastDeck/SEED_FIREBASE_SUCCESS',
    FAILURE: '@myFastDeck/SEED_FIREBASE_FAILURE',
  },
};

export function resetPokemonInDeckFest() {
  return {
    type: types.RESET.SUCCESS,
  };
}

export function addPokemonInDeckFestRequest({ pokemon }) {
  return {
    type: types.ADD.SUCCESS,
    payload: { listPokemon: pokemon },
  };
}

export function removePokemonInDeckFestRequest({ pokemon, listPokemon }) {
  return {
    type: types.REMOVE.SUCCESS,
    payload: { pokemon, listPokemon },
  };
}

export function newListPokemonInDeckFestRequest(authList) {
  return {
    type: types.NEW.SUCCESS,
    payload: { listPokemon: authList },
  };
}

export function seedListPokemonFirebaseRequest(authList, token) {
  return {
    type: types.SEED_FIREBASE.REQUEST,
    payload: { listPokemon: authList, token },
  };
}

export function seedListPokemonFirebaseSuccess() {
  return {
    type: types.SEED_FIREBASE.SUCCESS,
  };
}
export function seedListPokemonFirebaseFailure() {
  return {
    type: types.SEED_FIREBASE.FAILURE,
  };
}
