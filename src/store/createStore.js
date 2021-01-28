import { createStore, applyMiddleware } from 'redux';

export default (reducers, middleware, persistConfig) => {
  console.log('redu', persistConfig);
  const enhancer = applyMiddleware(...middleware);

  return createStore(reducers, enhancer, persistConfig);
};
