import { setupWorker } from 'msw';

import { surveyHandlers } from './handlers/surveyHandlers';

export const worker = setupWorker(...surveyHandlers);
