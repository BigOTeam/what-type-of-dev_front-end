import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import survey from './survey';
import radio from './radio';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['survey', 'radio'],
  blacklist: [],
};

const reducer = combineReducers({
  survey,
  radio,
});

export default persistReducer(persistConfig, reducer);
