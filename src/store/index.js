// import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const persistConfig = {
  key: 'pokemon',
  storage,
  whitelist: ['myFastDeck', 'auth'],
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
