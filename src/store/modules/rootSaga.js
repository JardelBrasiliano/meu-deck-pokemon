import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import mainList from './mainList/sagas';
import myFastDeck from './myFastDeck/sagas';

export default function* rootSaga() {
  return yield all([auth, mainList, myFastDeck]);
}
