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
      const status: number = 401;

      if (status === 401) {
        return response(
          context.status(401),
          context.json({
            message: '잘못된 데이터 요청을 하였습니다. 다시 요청 부탁드립니다.',
          }),
        );
      }

      if (status === 500) {
        return response(
          context.status(500),
          context.json({
            message: '서버에 오류가 생겼습니다.',
          }),
        );
      }

      return response(
        context.json({
          chartInfoData,
        }),
      );
    },
  ),
];
