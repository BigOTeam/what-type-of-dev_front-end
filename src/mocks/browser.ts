import { setupWorker } from 'msw';

import { surveyHandler } from './handlers/surveyHandler';
import { chartHandlers } from './handlers/chartHandlers';
import { chartSearchHandlers } from './handlers/chartSearchHandlers';

export const worker = setupWorker(
  ...chartHandlers,
  ...chartSearchHandlers,
  ...surveyHandler,
);
