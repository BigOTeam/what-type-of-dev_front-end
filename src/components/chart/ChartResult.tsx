import { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import { ChartResultType } from '../../types/chartTypes';

import DoughnutChart from './DoughnutChart';
import VerticalBarChart from './VerticalBarChart';
import HorizontalBarChart from './HorizontalBarChart';

const ChartResult: React.FC = () => {
  const [chartResult, setChartResult] = useState<ChartResultType[]>([]);

  useEffect(() => {
    fetch('/statistics')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errorMessage) {
          throw new Error(json.errorMessage);
        }
        setChartResult(json.chartData);
      })
      .catch((error) => {
        alert(`Something Wrong: ${error}`);
      });
  }, []);

  const chartByType = (data: ChartResultType) => {
    switch (data.chartType) {
      case 'doughnut':
        return (
          <DoughnutChart id={data.id} chartAnswerInfo={data.chartAnswerInfo} />
        );
      case 'verticalBar':
        return (
          <VerticalBarChart
            id={data.id}
            chartAnswerInfo={data.chartAnswerInfo}
          />
        );
        case 'horizontalBar':
        return (
          <HorizontalBarChart
            id={data.id}
            chartAnswerInfo={data.chartAnswerInfo}
          />
        );
      default:
        return <div></div>;
    }
  };

  return (
    <Container>
      <Wrapper>
        <SectionHeader>
          <Head>통계</Head>
        </SectionHeader>
        <ChartWrapper>
          {chartResult &&
            chartResult.map((data) => {
              return (
                <ChartItemWrapper>
                  <ChartItem key={data.id}>
                    <ChartCardHeaderWrapper>
                      <ChartHead>{data.question}</ChartHead>
                    </ChartCardHeaderWrapper>
                    <ChartCardContentWrapper>
                      {chartByType(data)}
                    </ChartCardContentWrapper>
                  </ChartItem>
                </ChartItemWrapper>
              );
            })}
        </ChartWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  background-color: #030415;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const SectionHeader = styled.div`
  text-align: center;
  /* padding-right: 40px; */
`;

const Head = styled.h1`
  text-align: center;
  color: #ffffff;

  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
  }
`;

const ChartWrapper = styled.div`
  margin-top: 24px;

  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
  }
`;

const ChartItemWrapper = styled.div`
  margin-top: 24px;
  /* max-width: 450px; */

  @media (max-width: 767px) {
  }
  @media (max-width: 575px) {
  }
`;

const ChartItem = styled.div`
  overflow: hidden;
  padding: 24px 40px 24px 40px;
  border-radius: 12px;
  background-color: #121328;
`;

const ChartCardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartHead = styled.h2`
  margin-top: 24px;
  margin-bottom: 16px;
  /* padding-right: 40px; */
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

const ChartCardContentWrapper = styled.div`
  padding: 24px 0px;

  @media (max-width: 767px) {
  }
`;

export default ChartResult;
