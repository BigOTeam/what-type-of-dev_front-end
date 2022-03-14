import { connectRouter } from 'connected-react-router';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import history from '../../history';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  blacklist: [],
};

const reducer = combineReducers({
  router: connectRouter(history),
});

export default persistReducer(persistConfig, reducer);
