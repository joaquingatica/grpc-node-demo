import { ChannelCredentials, createChannel, createClientFactory } from 'nice-grpc'

import { config } from './config'
import { HealthDefinition as HealthServiceDefinition } from './schema/grpc/health/v1/health'

const defaultCallOptions: Parameters<(typeof clientFactory)['create']>[2] = {
  '*': {},
}

const clientFactory = createClientFactory()

const createHealthClient = () => {
  const channel = createChannel(config.server.grpcAddress, ChannelCredentials.createInsecure())
  return clientFactory.create<HealthServiceDefinition>(
    HealthServiceDefinition,
    channel,
    defaultCallOptions,
  )
}

export const healthClient = createHealthClient()
