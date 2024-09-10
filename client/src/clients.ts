import { ChannelCredentials, createChannel, createClientFactory } from 'nice-grpc'
import { deadlineMiddleware } from 'nice-grpc-client-middleware-deadline'
import { retryMiddleware } from 'nice-grpc-client-middleware-retry'

import { config } from './config'
import { authenticationMiddleware } from './middleware/authentication'
import { HealthDefinition as HealthServiceDefinition } from './schema/grpc/health/v1/health'

const defaultCallOptions: Parameters<(typeof clientFactory)['create']>[2] = {
  '*': {
    deadline: 15 * 1000, // 15 seconds
    retryMaxAttempts: 5, // or deadline if it comes first
  },
}

const clientFactory = createClientFactory()
  .use(authenticationMiddleware)
  // retryMiddleware should be registered before deadlineMiddleware
  .use(retryMiddleware)
  .use(deadlineMiddleware)

const createHealthClient = () => {
  const channel = createChannel(config.server.grpcAddress, ChannelCredentials.createInsecure())
  return clientFactory.create<HealthServiceDefinition>(
    HealthServiceDefinition,
    channel,
    defaultCallOptions,
  )
}

export const healthClient = createHealthClient()
