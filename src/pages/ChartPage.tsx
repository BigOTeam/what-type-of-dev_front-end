import styled from '@emotion/styled';

import useChartList from '../hooks/useChartList';

import ChartHeader from '../components/chart/ChartHeader';
import ChartResult from '../components/chart/ChartResult';
import ChartSearch from '../components/chart/ChartSearch';

const ChartPage: React.FC = () => {
  const { isLoading, data, isError, errorMessage } = useChartList();

  return (
    <>
      <Container>
        <Wrapper>
          {data && (
            <>
              <ChartHeader chartTitle={data.chartData.statisticTitle} />
              <ChartSearch />
              <ChartResult
                chartContents={data.chartData.statisticContents}
                chartAnalyze={data.chartData.statisticAnalyze}
                userCount={data.chartData.statisticTitle.responseUserCount}
              />
            </>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default ChartPage;

// 전체
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 16px;
  // background-color: #fff1f7;
  background-color: #ffffff;

  @media (max-width: 767px) {
  }
`;

// 전체 안쪽
const Wrapper = styled.div`
  // width: calc(100%-32px);
  width: 100%;
  max-width: 900px;
`;
