import styled from '@emotion/styled';

import useChartList from '../hooks/useChartList';

import Header from '../components/chart/Header';
import ChartResult from '../components/chart/ChartResult';
import ChartSearch from '../components/chart/ChartSearch';
import SkeletonChartSection from '../components/chart/skeletonUI/SkeletonChartSection';
import SkeletonHeader from '../components/chart/skeletonUI/SkeletonHeader';

const ChartPage: React.FC = () => {
  const { isLoading, data, isError, errorMessage } = useChartList();

  if (isError) {
    console.log(errorMessage);
  }

  return (
    <Container>
      <Wrapper>
        {isLoading || !data ? (
          <SkeletonHeader />
        ) : (
          <Header headerData={data.statisticsData.header} />
        )}
        <ChartSearch />
        {isLoading || !data ? (
          <SkeletonChartSection />
        ) : (
          <ChartResult
            chartData={data.statisticsData.contents}
            userCount={data.statisticsData.header.userCount}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default ChartPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 0px 16px;
  box-sizing: border-box;
`;
