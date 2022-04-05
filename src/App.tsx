import { useEffect, Suspense, lazy } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';

import { ReactQueryDevtools } from 'react-query/devtools';

import { Global } from '@emotion/react';

import resetStyles from './styles/resetStyles';
import commonStyles from './styles/commonStyles';

import LoadingCircular from './components/common/LoadingCircular';

import ChartPage from './pages/ChartPage';
import SurveyPage from './pages/SurveyPage';
import ResultPage from './pages/ResultPage';
import JobTypeDetailPage from './pages/JobTypeDetailPage';

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
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/statistics" component={ChartPage} />
            <Route exact path="/surveys" component={SurveyPage} />
            <Route exact path="/results" component={ResultPage} />
            <Route exact path="/detail" component={JobTypeDetailPage} />
          </Switch>
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
