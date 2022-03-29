import { useState, useEffect } from 'react';

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
  ChartAnswerType,
  DoughnutChartData,
  DoughnutChartOption,
} from '../../types/chartTypes';
import { ChartColor, CHART_COLOR_LIST } from '../../data/chartColorListData';

interface ChartResultProps {
  id: number;
  //   question: string;
  //   chartType: string;
  chartAnswerInfo: ChartAnswerType[];
  userCount: number;
}

ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend, ChartDataLabels);

const DoughnutChart: React.FC<ChartResultProps> = ({
  id,
  chartAnswerInfo,
  userCount,
}) => {
  const [data, setData] = useState<DoughnutChartData>({
    labels: chartAnswerInfo.map((data: ChartAnswerType) => data.answer),
    datasets: [
      {
        label: '# of Votes',
        data: chartAnswerInfo.map((data: ChartAnswerType) =>
          Math.floor(Number(data.answerCount / userCount) * 100),
        ),
        backgroundColor: CHART_COLOR_LIST.map((x) => x.backgroundColor),
        borderColor: CHART_COLOR_LIST.map((x) => x.borderColor),
        borderWidth: 0,
      },
    ],
  });

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
              family: 'Spoqa Han Sans Neo', // 'sans-serif',
              weight: 'bold',
            },
          },
        },
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
  };

  useEffect(() => {
    setData({
      labels: chartAnswerInfo.map((data: ChartAnswerType) => data.answer),
      datasets: [
        {
          label: '# of Votes',
          data: chartAnswerInfo.map((data: ChartAnswerType) => {
            return Math.floor(Number(data.answerCount / userCount) * 100);
          }),
          backgroundColor: CHART_COLOR_LIST.map(
            (chartColor: ChartColor) => chartColor.backgroundColor,
          ),
          borderColor: CHART_COLOR_LIST.map(
            (chartColor: ChartColor) => chartColor.borderColor,
          ),
          borderWidth: 0,
        },
      ],
    });
  }, []);

  return (
    <Container>
      <Doughnut data={data} options={options} />
    </Container>
  );
};

export default DoughnutChart;

const Container = styled.div`
  // position: relative;
  // overflow: hidden;
  // height: 311px;

  @media (max-width: 767px) {
    padding: 8px 0px;
  }
`;
