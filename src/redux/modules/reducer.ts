import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  blacklist: [],
};

const reducer = combineReducers({});

export default persistReducer(persistConfig, reducer);
