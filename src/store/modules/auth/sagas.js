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

    const userKey = Object.keys(allUsers).map((item) => {
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
    yield put(newListPokemonInDeckFestRequest(userKey[0].user.fastDeck));
    yield put(actions.signInSuccess(userKey[0].token, userKey[0].user));
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

// requisição de lista
// com o nome ele pega a imagem
