import { combineReducers } from 'redux';

import auth from './auth/redurcer';
import listPokemon from './mainList/redurcer';

export default combineReducers({
  auth,
  listPokemon,
});
