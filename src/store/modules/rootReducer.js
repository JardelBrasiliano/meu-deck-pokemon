import { combineReducers } from 'redux';

import { StoreState } from '../createStore';

import auth from './auth/redurcer';

export default combineReducers({
    auth,
})