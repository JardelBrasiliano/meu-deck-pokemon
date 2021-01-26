import produce from 'immer';

const INITIAL_STATE = {
  listPokemon: [],
};
export default function myFastDeck(state = INITIAL_STATE, action) {
  /* eslint-disable */
  return produce(state, draft => {
    /* eslint-enable */
    switch (action.type) {
      case '@myFastDeck/ADD_POKEMON_REQUEST': {
        draft.listPokemon.push(action.payload.listPokemon);
        break;
      }
      case '@myFastDeck/REMOVE_POKEMON_SUCCESS':
        break;
      default:
    }
  });
}
