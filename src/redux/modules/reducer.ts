import { connectRouter } from 'connected-react-router';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import history from '../../history';

import survey from './survey';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['survey'],
  blacklist: [],
};

const reducer = combineReducers({
  survey,
  router: connectRouter(history),
});

export default persistReducer(persistConfig, reducer);
