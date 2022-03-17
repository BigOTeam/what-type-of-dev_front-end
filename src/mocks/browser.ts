import { setupWorker } from 'msw';

import { chartHandlers } from './handlers/chartHandlers';

export const worker = setupWorker(...chartHandlers);
