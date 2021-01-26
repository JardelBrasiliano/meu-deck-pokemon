import { combineReducers } from 'redux';

import auth from './auth/redurcer';
import listPokemon from './mainList/redurcer';
import myFastDeck from './myFastDeck/recurcer';

export default combineReducers({
  auth,
  listPokemon,
  myFastDeck,
});
