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

import {
  CHART_COLOR,
  CHART_DEFAULT_STYLE,
} from '../../data/chartColorListData';

interface DoughnutChartProps {
  id: number;
  chartLabelDataInfo: ChartInfoType;
  userCount: number;
}

ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend, ChartDataLabels);

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  id,
  chartLabelDataInfo,
  userCount,
}) => {
  const data: DoughnutChartData = {
    labels: chartLabelDataInfo.contents,
    datasets: [
      {
        label: '# of Votes',
        data: chartLabelDataInfo.countPercent,
        backgroundColor: CHART_COLOR.colorList,
        borderColor: CHART_DEFAULT_STYLE.border.color,
        borderWidth: CHART_DEFAULT_STYLE.border.width,
        hoverBorderWidth: CHART_DEFAULT_STYLE.border.doughnutHoverWidth,
      },
    ],
  };

  const options: DoughnutChartOption = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        formatter: function (value: number, context: Context): string {
          return `${value}%\n${context.chart.data.labels?.slice(
            context.dataIndex,
            context.dataIndex + 1,
          )}`;
        },
        labels: {
          value: {
            font: {
              family: CHART_DEFAULT_STYLE.font.family,
              weight: 'bold',
            },
          },
        },
      },
      tooltip: {
        backgroundColor: CHART_DEFAULT_STYLE.cardColor,
        bodyColor: CHART_DEFAULT_STYLE.font.color,
        bodyFont: {
          size: CHART_DEFAULT_STYLE.font.size,
          weight: 'bold',
        },
        padding: CHART_DEFAULT_STYLE.tooltip.paddingSize,
        callbacks: {
          label: (data) => {
            return `${data.parsed}%`;
          },
        },
      },
    },
  };

  return (
    <Container>
      <Doughnut
        data={data}
        options={options}
        style={{ width: '100%', minHeight: '200px' }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 4px 0;
  }
  @media (max-width: 575px) {
    margin: 4px 0;
  }
`;

export default DoughnutChart;
