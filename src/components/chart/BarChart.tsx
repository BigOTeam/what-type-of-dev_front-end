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
  ChartAnswerType,
  BarChartData,
  BarChartOption,
} from '../../types/chartTypes';
import { CHART_COLOR_LIST } from '../../data/chartColorListData';

interface ChartResultProps {
  id: number;
  indexAxis: 'y' | 'x';
  //   question: string;
  //   chartType: string;
  chartAnswerInfo: ChartAnswerType;
  // chartAnswerInfo: [{id: number, labelName: string, dataCount: number}]
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart: React.FC<ChartResultProps> = ({
  id,
  indexAxis,
  chartAnswerInfo,
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
        backgroundColor: '#FFFFFF',
        bodyColor: '#000000',
        bodyFont: {
          size: 14,
          weight: 'bold',
        },
        padding: 8,
      },
    },
    scales: {
      y: {
        ticks: {
          autoSkip: false,
          font: {
            family: 'Spoqa Han Sans Neo', // 'sans-serif',
            // weight: 'bold',
          },
        },
      },
      x: {
        ticks: {
          font: {
            family: 'Spoqa Han Sans Neo', // 'sans-serif',
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
      labels: chartAnswerInfo.content,
      datasets: [
        {
          label: '응답자',
          data: chartAnswerInfo.count,
          backgroundColor: CHART_COLOR_LIST[3].backgroundColor,
          borderColor: CHART_COLOR_LIST[3].borderColor,
          borderWidth: 0,
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
