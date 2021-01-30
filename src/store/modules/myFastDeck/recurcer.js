import produce from 'immer';

const INITIAL_STATE = {
  listPokemon: [],
};
export default function myFastDeck(state = INITIAL_STATE, action) {
  /* eslint-disable */
  return produce(state, draft => {
    switch (action.type) {
      case '@myFastDeck/ADD_POKEMON_REQUEST': {
        draft.listPokemon.push(action.payload.listPokemon);
        break;
      }
      case '@myFastDeck/REMOVE_POKEMON_SUCCESS':{
        action.payload.listPokemon.forEach((element,index) => {
          if (element.name === action.payload.pokemon.name) {
            draft.listPokemon.splice(index, 1);
          }
        });
        break;
      }
      case '@myFastDeck/NEW_POKEMON_SUCCESS':{
        draft.listPokemon = action.payload.listPokemon;
      }
      default:
    }
  });
  /* eslint-enable */
}
