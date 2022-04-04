import styled from '@emotion/styled';

import { ChartAnalyzeType } from '../../types/chartTypes';

import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';

interface ChartDataProps {
  data: ChartAnalyzeType;
  groupId: number;
  userCount: number;
}

const FONT_COLOR = '#45494b';

const ChartCard: React.FC<ChartDataProps> = ({ data, groupId, userCount }) => {
  const renderChart = (data: ChartAnalyzeType, userCount: number) => {
    switch (data.chartType) {
      case 'doughnut':
        return (
          <DoughnutChart
            id={data.id}
            chartLabelDataInfo={data.chartInfoData}
            userCount={userCount}
          />
        );
      case 'verticalBar':
        return (
          <BarChart
            id={data.id}
            indexAxis="x"
            chartLabelDataInfo={data.chartInfoData}
            labelName="모든 응답자"
          />
        );
      case 'horizontalBar':
        return (
          <BarChart
            id={data.id}
            indexAxis="y"
            chartLabelDataInfo={data.chartInfoData}
            labelName="모든 응답자"
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <Card key={data.id} id={`${groupId}-${data.id}`}>
      <Head>{data.question}</Head>
      <Chart>{renderChart(data, userCount)}</Chart>
    </Card>
  );
};

const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: calc(50% - 8px);
  margin-bottom: 14px;
  padding: 40px;
  border-radius: 14px;
  border: 1px solid #d7e2eb;
  box-sizing: border-box;
  color: ${FONT_COLOR};
  background-color: #fff;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px 40px;
    font-size: 18px;
  }
  @media (max-width: 575px) {
    padding: 16px 24px;
  }
`;

const Head = styled.h2`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2;
  color: ${FONT_COLOR};

  @media (max-width: 767px) {
    font-size: 18px;
  }
  @media (max-width: 575px) {
    margin: 8px 0;
  }
`;

const Chart = styled.div``;

export default ChartCard;
