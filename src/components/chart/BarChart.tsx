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

interface BarChartProps {
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

const BarChart: React.FC<BarChartProps> = ({
  id,
  indexAxis,
  chartLabelDataInfo,
  labelName,
}) => {
  const data: BarChartData = {
    labels: chartLabelDataInfo.contents,
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
    // maintainAspectRatio: false,
    // aspectRatio: 1,
    plugins: {
      datalabels: {
        display: true,
        labels: {
          value: {
            font: {
              family: CHART_DEFAULT_STYLE.font.family,
              weight: 'lighter',
              size: CHART_DEFAULT_STYLE.font.size,
            },
          },
        },
      },
      legend: {
        display: true,
        position: 'bottom',
      },
      tooltip: {
        backgroundColor: CHART_DEFAULT_STYLE.cardColor,
        titleColor: CHART_DEFAULT_STYLE.font.color,
        titleFont: {
          size: CHART_DEFAULT_STYLE.font.size,
          weight: 'bold',
        },
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
          padding: 0,
          autoSkip: false,
          font: {
            size: CHART_DEFAULT_STYLE.font.size,
            family: CHART_DEFAULT_STYLE.font.family,
          },
        },
      },
      x: {
        // afterFit: function (scale) {
        //   scale.width = 100;
        // },
        ticks: {
          font: {
            size: CHART_DEFAULT_STYLE.font.size,
            family: CHART_DEFAULT_STYLE.font.family,
          },
        },
      },
    },
    indexAxis: indexAxis,
    responsive: false,
  };

  return (
    <Container>
      <Bar
        options={options}
        data={data}
        style={{ width: '95%' }}
        // height={50}
        // style={{ minHeight: '200px' }}
        // style={{ height: '94%' }}
        // style={{ width: '100%', minHeight: '220px' }}
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
