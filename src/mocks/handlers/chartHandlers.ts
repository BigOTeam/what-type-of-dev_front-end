import { rest } from 'msw';

import { chartData } from '../database/chart';

export const chartHandlers = [
  rest.get('/statistics', async (request, response, context) => {
    return response(
      context.status(200),
      context.json({
        chartData,
      }),
    );
  }),
];
