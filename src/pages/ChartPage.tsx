import styled from '@emotion/styled';

import useChartList from '../hooks/useChartList';

import ChartHeader from '../components/chart/ChartHeader';
import ChartResult from '../components/chart/ChartResult';
import ChartSearch from '../components/chart/ChartSearch';
import SkeletonChartSection from '../components/chart/SkeletonChartSection';

const ChartPage: React.FC = () => {
  const { isLoading, data, isError, errorMessage } = useChartList();

  if (isError) {
    console.log(errorMessage);
  }

  return (
    <Container>
      <Wrapper>
        {isLoading || !data ? (
          <SkeletonChartSection />
        ) : (
          <>
            <ChartHeader chartTitle={data.statisticsData.statisticTitle} />
            <ChartSearch />
            <ChartResult
              chartContents={data.statisticsData.statisticContents}
              chartAnalyze={data.statisticsData.statisticAnalyze}
              userCount={data.statisticsData.statisticTitle.responseUserCount}
            />
          </>
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
  padding: 0px 16px;
  // background-color: #fff1f7;
  background-color: #ffffff;

  @media (max-width: 767px) {
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
`;
