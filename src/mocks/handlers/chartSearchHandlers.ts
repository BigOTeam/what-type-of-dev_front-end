import { rest } from 'msw';

import { ChartInfoType } from '../../types/chartTypes';

import { ChartSearchData } from '../database/chart';

export const chartSearchHandlers = [
  rest.get(
    `${process.env.REACT_APP_SERVER_URL}/api/v1/statistics/filter`,
    async (request, response, context) => {
      const gender = request.url.searchParams.get('gender');
      const age = request.url.searchParams.get('age');

      const chartInfoData: ChartInfoType = ChartSearchData.filter(
        (chart) => chart.gender === gender,
      ).filter((chart) => chart.age === age)[0]?.chartInfoData;

      return response(
        context.status(200),
        context.json({
          chartInfoData,
        }),
      );
    },
  ),
];
