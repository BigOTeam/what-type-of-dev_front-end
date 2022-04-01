import { connectRouter } from 'connected-react-router';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import history from '../../history';

import form from './form';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['form'],
  blacklist: [],
};

const reducer = combineReducers({
  form,
  router: connectRouter(history),
});

export default persistReducer(persistConfig, reducer);
