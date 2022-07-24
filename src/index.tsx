import React from 'react';
import ReactDOM from 'react-dom';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createReduxStore from './redux/createReduxStore';

import * as Sentry from '@sentry/react';

import App from './App';

const queryClient = new QueryClient();
const store = createReduxStore();
const persistor = persistStore(store);

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser');

//   worker.start();
// }

Sentry.init({
  dsn: `${process.env.REACT_APP_SENTRY_DSN}`,
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root'),
);
