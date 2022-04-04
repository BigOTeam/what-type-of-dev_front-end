import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import form from './form';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['form'],
  blacklist: [],
};

const reducer = combineReducers({
  form,
});

export default persistReducer(persistConfig, reducer);
