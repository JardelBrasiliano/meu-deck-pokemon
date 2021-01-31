import { types } from './actions';

const INITIAL_STATE = {
  loadingListPokemonRequest: false,
  listPokemon: [],
  error: false,
};

export default function mainList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LISTPOKEMON.REQUEST:
      return {
        ...state,
        loadingListPokemonRequest: true,
      };
    case types.LISTPOKEMON.SUCCESS:
      return {
        ...state,
        loadingListPokemonRequest: false,
        listPokemon: action.payload.list,
      };
    case types.LISTPOKEMON.FAILURE:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
