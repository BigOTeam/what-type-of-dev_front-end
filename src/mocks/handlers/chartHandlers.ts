import { rest } from 'msw';

import { statisticsData } from '../database/chart';

export const chartHandlers = [
  rest.get(
    `${process.env.REACT_APP_SERVER_URL}/api/v1/statistics`,
    async (request, response, context) => {
      const status: number = 200;

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
          header: statisticsData.header,
          contents: statisticsData.contents,
        }),
      );
    },
  ),
];
