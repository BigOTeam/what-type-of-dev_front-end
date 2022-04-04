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
  IndexAxisType,
} from '../../types/chartTypes';

import {
  CHART_COLOR,
  CHART_DEFAULT_STYLE,
} from '../../data/chartColorListData';

interface ChartResultProps {
  id: number;
  indexAxis: IndexAxisType;
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

const CHART_BACKGROUND_COLOR = CHART_COLOR.colorList[2];

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
        borderColor: CHART_DEFAULT_STYLE.border.color,
        borderWidth: CHART_DEFAULT_STYLE.border.width,
        hoverBorderWidth: CHART_DEFAULT_STYLE.border.barHoverWidth,
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
        position: 'bottom',
      },
      tooltip: {
        backgroundColor: CHART_DEFAULT_STYLE.cardColor,
        bodyColor: CHART_DEFAULT_STYLE.font.color,
        bodyFont: {
          size: CHART_DEFAULT_STYLE.font.size,
          weight: 'bold',
        },
        padding: CHART_DEFAULT_STYLE.tooltip.paddingSize,
      },
    },
    scales: {
      y: {
        ticks: {
          autoSkip: false,
          font: {
            family: CHART_DEFAULT_STYLE.font.family,
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: CHART_DEFAULT_STYLE.font.family,
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 4px 0;
  }
  @media (max-width: 575px) {
    margin: 4px 0;
  }
`;

export default BarChart;
