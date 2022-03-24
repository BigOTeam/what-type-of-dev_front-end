import { rest } from 'msw';

import { formData1, formData2 } from '../database/formData';

export const formHandler = [
  rest.get(
    `${process.env.REACT_APP_SERVER_URL}/dev-form/1`,
    async (request, response, context) => {
      const result = await response(context.json(formData1));
      return result;
    },
  ),

  rest.get(
    `${process.env.REACT_APP_SERVER_URL}/dev-form/2`,
    async (request, response, context) => {
      const result = await response(context.json(formData2));
      return result;
    },
  ),
];
