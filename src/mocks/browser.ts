import { setupWorker } from 'msw';

import { chartHandlers } from './handlers/chartHandlers';
import { chartSearchHandlers } from './handlers/chartSearchHandlers';
import { surveyHandlers } from './handlers/surveyHandlers';
import { jobTypeDetailHandlers } from './handlers/jobTypeDetailHandlers';

export const worker = setupWorker(
  ...chartHandlers,
  ...chartSearchHandlers,
  ...surveyHandlers,
  ...jobTypeDetailHandlers,
);
