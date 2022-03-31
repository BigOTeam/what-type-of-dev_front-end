import { useState, useEffect } from 'react';

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
  ChartLabelDataType,
  BarChartData,
  BarChartOption,
} from '../../types/chartTypes';
import { CHART_COLOR } from '../../data/chartColorListData';

interface ChartResultProps {
  id: number;
  indexAxis: 'y' | 'x';
  chartLabelDataInfo: ChartLabelDataType;
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
const TOOLTIP_PADDING_SIZE = 8;

const BarChart: React.FC<ChartResultProps> = ({
  id,
  indexAxis,
  chartLabelDataInfo,
}) => {
  const [data, setData] = useState<BarChartData>({ labels: [], datasets: [] });

  const options: BarChartOption = {
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
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

  useEffect(() => {
    setData({
      labels: chartLabelDataInfo.content,
      datasets: [
        {
          label: '응답자',
          data: chartLabelDataInfo.count,
          backgroundColor: CHART_BACKGROUND_COLOR,
          borderColor: CHART_BORDER_COLOR,
          borderWidth: CHART_BORDER_WIDTH,
        },
      ],
    });
  }, []);

  return (
    <Container>
      <Bar options={options} data={data!} />
    </Container>
  );
};

export default BarChart;

const Container = styled.div`
  // position: relative;
  height: 100%;

  @media (max-width: 767px) {
  }
`;
