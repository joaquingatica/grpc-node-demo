import { createClientFactory } from 'nice-grpc'
import { deadlineMiddleware } from 'nice-grpc-client-middleware-deadline'
import { retryMiddleware } from 'nice-grpc-client-middleware-retry'

import { authenticationMiddleware } from '../middleware/authentication'

export const defaultCallOptions: Parameters<(typeof clientFactory)['create']>[2] = {
  '*': {
    deadline: 15 * 1000, // 15 seconds
    retryMaxAttempts: 5, // or deadline if it comes first
  },
}

export const clientFactory = createClientFactory()
  .use(authenticationMiddleware)
  // retryMiddleware should be registered before deadlineMiddleware
  .use(retryMiddleware)
  .use(deadlineMiddleware)
