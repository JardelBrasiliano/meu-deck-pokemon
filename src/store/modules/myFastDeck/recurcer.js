import produce from 'immer';

const INITIAL_STATE = {
  listPokemon: [],
  loading: false,
};
export default function myFastDeck(state = INITIAL_STATE, action) {
  /* eslint-disable */
  return produce(state, draft => {
    switch (action.type) {
      case '@myFastDeck/RESET_LIST_POKEMON': {
        draft.listPokemon = [];
        break;
      }
      case '@myFastDeck/ADD_POKEMON_REQUEST': {
        draft.listPokemon.push(action.payload.listPokemon);
        draft.modification = true;
        break;
      }
      case '@myFastDeck/REMOVE_POKEMON_SUCCESS':{
        action.payload.listPokemon.forEach((element,index) => {
          if (element.name === action.payload.pokemon.name) {
            draft.listPokemon.splice(index, 1);
            draft.modification = true;
          }
        });
        break;
      }
      case '@myFastDeck/NEW_POKEMON_SUCCESS':{
        draft.listPokemon = action.payload.listPokemon;
        draft.modification = true;
      }


      case '@myFastDeck/SEED_FIREBASE_REQUEST':{
        draft.loading = true;
      }
      case '@myFastDeck/SEED_FIREBASE_SUCCESS':{
        draft.loading = false;
        draft.modification = false;
      }
      case '@myFastDeck/SEED_FIREBASE_FAILURE':{
        draft.loading = false;
      }
      default:
    }
  });
  /* eslint-enable */
}
