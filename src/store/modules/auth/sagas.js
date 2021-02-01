import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';

import { newListPokemonInDeckFestRequest } from '../myFastDeck/actions';

import rsf from '../../../services/apiAuth';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const { user } = yield call(
      rsf.auth.signInWithEmailAndPassword,
      email,
      password,
    );
    const allUsers = yield call(rsf.database.read, 'users/');

    const data = Object.keys(allUsers).map((item) => {
      if (user.uid === allUsers[item].idUser) {
        const newUser = {
          token: item,
          user: {
            name: allUsers[item].name,
            fastDeck: allUsers[item].fastDeck || [],
          },
        };
        return newUser;
      }
      return -1;
    });
    for (let index = 0; index < data.length; index += 1) {
      const element = data[index];
      if (element) {
        yield put(newListPokemonInDeckFestRequest(element.user.fastDeck));
        yield put(actions.signInSuccess(element.token, element.user));
      }
    }
  } catch (err) {
    yield put(actions.signInFailure());
  }
}
export function* registerNewEmailAndPassword({ payload }) {
  try {
    const { name, email, password } = payload;

    const { user } = yield call(
      rsf.auth.createUserWithEmailAndPassword,
      email,
      password,
    );
    yield call(rsf.database.create, 'users/', {
      idUser: user.uid,
      name,
      fastDeck: [],
    });

    yield put(actions.registerSuccess());
  } catch (err) {
    yield put(actions.signInFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/REGISTER_REQUEST', registerNewEmailAndPassword),
]);
