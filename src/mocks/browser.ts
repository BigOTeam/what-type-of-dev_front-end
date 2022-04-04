import { setupWorker } from 'msw';

import { formHandler } from './handlers/formHandler';
import { chartHandlers } from './handlers/chartHandlers';
import { chartSearchHandlers } from './handlers/chartSearchHandlers';
import { surveyHandlers } from './handlers/surveyHandlers';

export const worker = setupWorker(
  ...chartHandlers,
  ...chartSearchHandlers,
  ...formHandler,
  ...surveyHandlers,
);
