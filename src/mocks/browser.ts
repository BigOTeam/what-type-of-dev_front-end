import { setupWorker } from 'msw';

import { formHandler } from './handlers/formHandler';
import { chartHandlers } from './handlers/chartHandlers';

export const worker = setupWorker(...chartHandlers, ...formHandler);
