import { rest } from 'msw';

import { statisticsData } from '../database/chart';

export const chartHandlers = [
  rest.get('api/v1/statistics', async (request, response, context) => {
    return response(
      context.status(200),
      context.json({
        statisticsData,
      }),
    );
  }),
];
