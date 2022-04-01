import { rest } from 'msw';

export const surveyHandlers = [
  rest.get('/api/v1/surveys/count', async (request, response, context) => {
    return response(
      context.json({
        responseUserCount: 2000,
      }),
    );
  }),
];
