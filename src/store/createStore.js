import { createStore, applyMiddleware } from 'redux';

export default (reducers, middleware, persistConfig) => {
  const enhancer = applyMiddleware(...middleware);

  return createStore(reducers, enhancer, persistConfig);
};
