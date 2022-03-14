import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';

import { ErrorBoundary } from 'react-error-boundary';

import { ReactQueryDevtools } from 'react-query/devtools';

import { Global } from '@emotion/react';

import resetStyles from './styles/resetStyles';

import history from './history';

import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Global styles={resetStyles} />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      </Router>
    </ErrorBoundary>
  );
};

export default App;
