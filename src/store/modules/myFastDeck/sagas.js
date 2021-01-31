import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from './actions';
import rsf from '../../../services/apiAuth';

export function* seedListPokemonFirebase({ payload }) {
  try {
    const { listPokemon, token } = payload;
    yield call(rsf.database.patch, `users/${token}`, {
      fastDeck: listPokemon,
    });
    yield put(actions.seedListPokemonFirebaseSuccess());
  } catch (err) {
    yield put(actions.seedListPokemonFirebaseFailure());
  }
}

export default all([
  takeLatest('@myFastDeck/SEED_FIREBASE_REQUEST', seedListPokemonFirebase),
]);
