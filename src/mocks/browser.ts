import { setupWorker } from 'msw';

import { chartHandlers } from './handlers/chartHandlers';
import { chartSearchHandlers } from './handlers/chartSearchHandlers';
import { surveyHandlers } from './handlers/surveyHandlers';

export const worker = setupWorker(
  ...chartHandlers,
  ...chartSearchHandlers,
  ...surveyHandlers,
);
