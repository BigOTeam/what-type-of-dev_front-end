import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from './modules/reducer';
import rootSaga from './modules/rootSaga';

const createReduxStore = () => {
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleWare)),
  );

  sagaMiddleWare.run(rootSaga);

  return store;
};

export default createReduxStore;
