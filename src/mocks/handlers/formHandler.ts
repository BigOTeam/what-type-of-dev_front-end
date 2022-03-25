import { rest } from 'msw';

import {
  formData1,
  formData2,
  formData3,
  formData4,
} from '../database/formData';

export const formHandler = [
  rest.get(
    `${process.env.REACT_APP_SERVER_URL}/dev-form`,
    async (request, response, context) => {
      const pageNo = request.url.searchParams.get('pageNo');
      const isDeveloper = request.url.searchParams.get('isDeveloper');

      if (Number(pageNo) === 1) {
        return await response(context.json(formData1));
      } else if (Number(pageNo) === 2 && isDeveloper === 'true') {
        return await response(context.json(formData2));
      } else if (Number(pageNo) === 2 && isDeveloper === 'false') {
        return await response(context.json(formData3));
      } else if (Number(pageNo) === 3) {
        return await response(context.json(formData4));
      }
    },
  ),
];
