const INITIAL_STATE = {
  loadingListPokemonRequest: false,
  listPokemon: [],
  error: false,
};

export default function mainList(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@listPokemon/LIST_POKEMON_REQUEST':
      return {
        ...state,
        loadingListPokemonRequest: true,
      };
    case '@listPokemon/LIST_POKEMON_SUCCESS':
      return {
        ...state,
        loadingListPokemonRequest: false,
        listPokemon: action.payload.list,
      };
    case '@listPokemon/LIST_POKEMON_FAILURE':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
