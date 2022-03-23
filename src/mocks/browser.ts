import { setupWorker } from 'msw';

import { formHandler } from './handlers/formHandler';

export const worker = setupWorker(...formHandler);
