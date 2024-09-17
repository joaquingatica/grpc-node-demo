import { ChannelCredentials, createChannel } from 'nice-grpc'

import { config } from '../config'
import { HealthDefinition as HealthServiceDefinition } from '../schema/grpc/health/v1/health'
import { clientFactory, defaultCallOptions } from './factory'

const createHealthClient = () => {
  const channel = createChannel(config.server.grpcAddress, ChannelCredentials.createInsecure())
  return clientFactory.create<HealthServiceDefinition>(
    HealthServiceDefinition,
    channel,
    defaultCallOptions,
  )
}

export const healthClient = createHealthClient()
