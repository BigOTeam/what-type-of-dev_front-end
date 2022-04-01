import { useEffect, Suspense, lazy } from 'react';

import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';

import { ErrorBoundary } from 'react-error-boundary';

import { ReactQueryDevtools } from 'react-query/devtools';

import { Global } from '@emotion/react';

import resetStyles from './styles/resetStyles';
import commonStyles from './styles/commonStyles';

import history from './history';

import LoadingCircular from './components/common/LoadingCircular';

import ChartPage from './pages/ChartPage';

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

const App: React.FC = () => {
  useEffect(() => {
    window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  });

  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Global styles={resetStyles} />
      <Global styles={commonStyles} />
      <Suspense fallback={<LoadingCircular />}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/statistics" component={ChartPage} />
          </Switch>
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
