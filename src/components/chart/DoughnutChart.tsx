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
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { ChartAnswerType, DoughnutChartData } from '../../types/chartTypes';
import { ChartColor, CHART_COLOR_LIST } from '../../data/chartColorListData';

interface ChartResultProps {
  id: number;
  //   question: string;
  //   chartType: string;
  chartAnswerInfo: ChartAnswerType[];
}

ChartJS.register(ArcElement, CategoryScale, Tooltip, Legend, ChartDataLabels);

const DoughnutChart: React.FC<ChartResultProps> = ({ id, chartAnswerInfo }) => {
  const [data, setData] = useState<DoughnutChartData>({
    labels: chartAnswerInfo
      .sort((a: ChartAnswerType, b: ChartAnswerType) =>
        a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0,
      )
      .map((data: ChartAnswerType) => data.answer),
    datasets: [
      {
        label: '# of Votes',
        data: chartAnswerInfo
          .sort((a: ChartAnswerType, b: ChartAnswerType) =>
            a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0,
          )
          .map((data: ChartAnswerType) =>
            Math.floor(Number(data.answerCount / 90) * 100),
          ),
        backgroundColor: CHART_COLOR_LIST.map((x) => x.backgroundColor),
        borderColor: CHART_COLOR_LIST.map((x) => x.borderColor),
        borderWidth: 0,
      },
    ],
  });

  useEffect(() => {
    setData({
      labels: chartAnswerInfo
        .sort((a: ChartAnswerType, b: ChartAnswerType) =>
          a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0,
        )
        .map((data: ChartAnswerType) => data.answer),
      datasets: [
        {
          label: '# of Votes',
          data: chartAnswerInfo
            .sort((a: ChartAnswerType, b: ChartAnswerType) =>
              a.rank > b.rank ? 1 : b.rank > a.rank ? -1 : 0,
            )
            .map((data: ChartAnswerType) => {
              return Math.floor(Number(data.answerCount / 90) * 100);
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
  }, [chartAnswerInfo]);

  return (
    <Container>
      <Doughnut
        data={data}
        options={{
          plugins: {
            datalabels: {
              formatter: function (value, context) {
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
                    weight: 'bold',
                  },
                },
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default DoughnutChart;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 311px;

  @media (max-width: 767px) {
  }
`;
