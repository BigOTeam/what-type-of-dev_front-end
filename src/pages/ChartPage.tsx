import styled from '@emotion/styled';

import useChartList from '../hooks/useChartList';

import ChartHeader from '../components/chart/ChartHeader';
import ChartResult from '../components/chart/ChartResult';
import ChartSearch from '../components/chart/ChartSearch';

const ChartPage: React.FC = () => {
  const { isLoading, data, isError, errorMessage } = useChartList();

  if (isError) {
    console.log(errorMessage);
  }

  return (
    <Container>
      {isLoading || !data ? (
        <></>
      ) : (
        <Wrapper>
          <ChartHeader chartTitle={data.statictData.statisticTitle} />
          <ChartSearch />
          <ChartResult
            chartContents={data.statictData.statisticContents}
            chartAnalyze={data.statictData.statisticAnalyze}
            userCount={data.statictData.statisticTitle.responseUserCount}
          />
        </Wrapper>
      )}
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
