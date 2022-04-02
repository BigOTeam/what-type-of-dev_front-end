import styled from '@emotion/styled';

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';

import {
  ChartInfoType,
  DoughnutChartData,
  DoughnutChartOption,
} from '../../types/chartTypes';
import { CHART_COLOR } from '../../data/chartColorListData';

interface ChartResultProps {
  id: number;
  chartLabelDataInfo: ChartInfoType;
  userCount: number;
}

ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend, ChartDataLabels);

const CARD_BACKGROUND_COLOR = '#FFFFFF';
const BODY_FONT_COLOR = '#000000';
const CHART_FONT = 'Spoqa Han Sans Neo'; // 'sans-serif',
// const BODY_FONT_WEIGHT = 700;
const CHART_BODY_FONT_SIZE = 14;
const CHART_BORDER_COLOR = CHART_COLOR.borderColor;
const CHART_BORDER_WIDTH = 0;
const CHART_HOVER_BORDER_WIDTH = 4;
const TOOLTIP_PADDING_SIZE = 8;

const DoughnutChart: React.FC<ChartResultProps> = ({
  id,
  chartLabelDataInfo,
  userCount,
}) => {
  const data: DoughnutChartData = {
    labels: chartLabelDataInfo.content,
    datasets: [
      {
        label: '# of Votes',
        data: chartLabelDataInfo.countPercent,
        backgroundColor: CHART_COLOR.colorList,
        borderColor: CHART_BORDER_COLOR,
        borderWidth: CHART_BORDER_WIDTH,
        hoverBorderWidth: CHART_HOVER_BORDER_WIDTH,
      },
    ],
  };

  const options: DoughnutChartOption = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        formatter: function (value: number, context: Context): string {
          return (
            value +
            '%\n' +
            context.chart.data.labels?.slice(
              context.dataIndex,
              context.dataIndex + 1,
            )
          );
        },
        labels: {
          value: {
            font: {
              family: CHART_FONT,
              weight: 'bold',
            },
          },
        },
      },
      tooltip: {
        backgroundColor: CARD_BACKGROUND_COLOR,
        bodyColor: BODY_FONT_COLOR,
        bodyFont: {
          size: CHART_BODY_FONT_SIZE,
          weight: 'bold',
        },
        padding: TOOLTIP_PADDING_SIZE,
      },
    },
  };

  return (
    <Container>
      <Doughnut
        data={data}
        options={options}
        style={{ width: 'auto', minHeight: '200px' }}
      />
    </Container>
  );
};

export default DoughnutChart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 4px 0px;
  }
  @media (max-width: 575px) {
    margin: 4px 0px;
  }
`;
