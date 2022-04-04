import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import survey from './survey';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['survey'],
  blacklist: [],
};

const reducer = combineReducers({
  survey,
});

export default persistReducer(persistConfig, reducer);
