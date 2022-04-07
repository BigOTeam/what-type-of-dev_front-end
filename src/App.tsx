import { useEffect, Suspense, lazy } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';

import { ReactQueryDevtools } from 'react-query/devtools';

import { Global } from '@emotion/react';

import resetStyles from './styles/resetStyles';
import commonStyles from './styles/commonStyles';

import LoadingCircular from './components/common/LoadingCircular';

const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ChartPage = lazy(() => import('./pages/ChartPage'));
const SurveyPage = lazy(() => import('./pages/SurveyPage'));
const ResultPage = lazy(() => import('./pages/ResultPage'));
const JobTypeDetailPage = lazy(() => import('./pages/JobTypeDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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
            <Route exact path="/jobs/:id" component={JobTypeDetailPage} />
            <Route exact path="/jobs/:id" component={JobTypeDetailPage} />
            <Route component={NotFoundPage} />
          </Switch>
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
