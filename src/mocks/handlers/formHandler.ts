import { rest } from 'msw';

import { formData } from '../database/formData';

export const formHandler = [
  rest.get(
    `${process.env.REACT_APP_SERVER_URL}/dev-form/:pageNumber`,
    async (request, response, context) => {
      const result = await response(context.json(formData));
      return result;
    },
  ),
];
