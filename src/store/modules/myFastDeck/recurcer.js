import produce from 'immer';
import { types } from './actions';

const INITIAL_STATE = {
  listPokemon: [],
  loading: false,
};
export default function myFastDeck(state = INITIAL_STATE, action) {
  /* eslint-disable */
  return produce(state, draft => {
    switch (action.type){
      case types.RESET.SUCCESS: {
        draft.listPokemon = [];
        break;
      }
      case types.ADD.SUCCESS:{
        draft.listPokemon.push(action.payload.listPokemon);
        draft.modification = true;
        break;
      }
      case types.REMOVE.SUCCESS:{
        action.payload.listPokemon.forEach((element,index) => {
          if (element.name === action.payload.pokemon.name) {
            draft.listPokemon.splice(index, 1);
            draft.modification = true;
          }
        });
        break;
      }
      case types.NEW.SUCCESS:{
        draft.listPokemon = action.payload.listPokemon;
        draft.modification = true;
      }


      case types.SEED_FIREBASE.REQUEST:{
        draft.loading = true;
      }
      case types.SEED_FIREBASE.SUCCESS:{
        draft.loading = false;
        draft.modification = false;
      }
      case types.SEED_FIREBASE.FAILURE:{
        draft.loading = false;
      }
      default:
    }
  });
  /* eslint-enable */
}
