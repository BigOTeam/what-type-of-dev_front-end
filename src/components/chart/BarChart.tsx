import styled from '@emotion/styled';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import {
  ChartInfoType,
  BarChartData,
  BarChartOption,
} from '../../types/chartTypes';
import { CHART_COLOR } from '../../data/chartColorListData';

interface ChartResultProps {
  id: number;
  indexAxis: 'y' | 'x';
  chartLabelDataInfo: ChartInfoType;
  labelName: string;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const CARD_BACKGROUND_COLOR = '#FFFFFF';
const BODY_FONT_COLOR = '#000000';
const CHART_FONT = 'Spoqa Han Sans Neo'; // 'sans-serif',
// const BODY_FONT_WEIGHT = 700;
const CHART_BODY_FONT_SIZE = 14;
const CHART_BACKGROUND_COLOR = CHART_COLOR.colorList[2];
const CHART_BORDER_COLOR = CHART_COLOR.borderColor;
const CHART_BORDER_WIDTH = 0;
const CHART_HOVER_BORDER_WIDTH = 1;
const TOOLTIP_PADDING_SIZE = 8;

const BarChart: React.FC<ChartResultProps> = ({
  id,
  indexAxis,
  chartLabelDataInfo,
  labelName,
}) => {
  const data: BarChartData = {
    labels: chartLabelDataInfo.content,
    datasets: [
      {
        label: labelName,
        data: chartLabelDataInfo.count,
        backgroundColor: CHART_BACKGROUND_COLOR,
        borderColor: CHART_BORDER_COLOR,
        borderWidth: CHART_BORDER_WIDTH,
        hoverBorderWidth: CHART_HOVER_BORDER_WIDTH,
      },
    ],
  };

  const options: BarChartOption = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: true,
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
    scales: {
      y: {
        ticks: {
          autoSkip: false,
          font: {
            family: CHART_FONT,
            // weight: 'bold',
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: CHART_FONT,
            // weight: 'bold',
          },
        },
      },
    },
    indexAxis: indexAxis,
    responsive: true,
  };

  return (
    <Container>
      <Bar
        options={options}
        data={data}
        style={{ width: '100%', minHeight: '220px' }}
      />
    </Container>
  );
};

export default BarChart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 4px 0px;
  }
  @media (max-width: 575px) {
    margin: 4px 0px;
  }
`;
