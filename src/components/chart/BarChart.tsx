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
// import ChartDataLabels from 'chartjs-plugin-datalabels';

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
  chartAnswerInfo: ChartAnswerType[];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  // ChartDataLabels,
);

const BarChart: React.FC<ChartResultProps> = ({
  id,
  indexAxis,
  chartAnswerInfo,
}) => {
  const [data, setData] = useState<BarChartData>({
    labels: chartAnswerInfo.map((data: ChartAnswerType) => data.answer),
    datasets: [
      {
        label: '응답자',
        data: chartAnswerInfo.map((data: ChartAnswerType) => data.answerCount),
        backgroundColor: CHART_COLOR_LIST[3].backgroundColor,
        borderColor: CHART_COLOR_LIST[3].borderColor,
        borderWidth: 0,
      },
    ],
  });

  const options: BarChartOption = {
    indexAxis: indexAxis,
    responsive: true,
  };

  useEffect(() => {
    setData({
      labels: chartAnswerInfo.map((data: ChartAnswerType) => data.answer),
      datasets: [
        {
          label: '응답자',
          data: chartAnswerInfo.map(
            (data: ChartAnswerType) => data.answerCount,
          ),
          backgroundColor: CHART_COLOR_LIST[3].backgroundColor,
          borderColor: CHART_COLOR_LIST[3].borderColor,
          borderWidth: 0,
        },
      ],
    });
  }, []);

  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
};

export default BarChart;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;

  @media (max-width: 767px) {
  }
`;
