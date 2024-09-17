import { ChannelCredentials, createChannel } from 'nice-grpc'

import { config } from '../config'
import { CharacterServiceDefinition } from '../schema/gatica/middleearth/v1/character_service'
import { clientFactory, defaultCallOptions } from './factory'

const createCharacterClient = () => {
  const channel = createChannel(config.server.grpcAddress, ChannelCredentials.createInsecure())
  return clientFactory.create<CharacterServiceDefinition>(
    CharacterServiceDefinition,
    channel,
    defaultCallOptions,
  )
}

export const characterClient = createCharacterClient()
