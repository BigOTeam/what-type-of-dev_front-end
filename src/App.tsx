import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';

import { ErrorBoundary } from 'react-error-boundary';

import { ReactQueryDevtools } from 'react-query/devtools';

import { Global } from '@emotion/react';

import resetStyles from './styles/resetStyles';
import commonStyles from './styles/commonStyles';

import history from './history';

import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Global styles={resetStyles} />
      <Global styles={commonStyles} />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dev-form" component={FormPage} />
        </Switch>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      </Router>
    </ErrorBoundary>
  );
};

export default App;
