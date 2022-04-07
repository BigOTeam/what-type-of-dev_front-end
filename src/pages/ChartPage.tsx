import { useEffect } from 'react';

import styled from '@emotion/styled';

import useChartList from '../hooks/useChartList';

import Header from '../components/common/Header';
import ChartTitle from '../components/chart/ChartTitle';
import ChartResultSection from '../components/chart/ChartResultSection';
import ChartFilteredSection from '../components/chart/ChartFilteredSection';
import SkeletonChartSection from '../components/chart/skeletonUI/SkeletonChartSection';
import SkeletonHeader from '../components/chart/skeletonUI/SkeletonHeader';
import ResultButtonSection from '../components/result/ResultButtonSection';
import Footer from '../components/common/Footer';

const ChartPage: React.FC = () => {
  const { isLoading, data, isError, errorMessage } = useChartList();

  const scrollToTop = () => {
    let currentLocation = window.location.href;
    if (!currentLocation.includes('#')) {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  if (isError) {
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          {isLoading || !data ? (
            <SkeletonHeader />
          ) : (
            <ChartTitle titleData={data.header} />
          )}
          <ChartFilteredSection />
          {isLoading || !data ? (
            <SkeletonChartSection />
          ) : (
            <ChartResultSection
              chartData={data.contents}
              userCount={data.header.userCount}
            />
          )}
          <ResultButtonSection isStatistics={true} />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eff9fd;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 16px;
  box-sizing: border-box;
`;

export default ChartPage;
