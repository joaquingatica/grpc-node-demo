import { createServer } from 'nice-grpc'
import { openTelemetryServerMiddleware } from 'nice-grpc-opentelemetry'
import { HealthDefinition as HealthServiceDefinition } from 'nice-grpc-server-health'
import { TerminatorMiddleware } from 'nice-grpc-server-middleware-terminator'
import { ServerReflectionService as ServerReflectionServiceDefinition } from 'nice-grpc-server-reflection'

import { authenticationMiddleware } from './middleware/authentication'
import { loggingMiddleware } from './middleware/logging'
import { CharacterServiceDefinition } from './proto/gatica/middleearth/v1/character_service'
import { characterService } from './services/characterService'
import { getHealthService } from './services/healthService'
import { getServerReflectionService } from './services/serverReflectionService'

export const terminatorMiddleware = TerminatorMiddleware()

export const server = createServer()
  .use(openTelemetryServerMiddleware())
  .use(loggingMiddleware)
  .use(authenticationMiddleware())
  .use(terminatorMiddleware)

export const setupServer = async () => {
  const healthService = await getHealthService()

  const services = [
    [CharacterServiceDefinition, characterService],
    [HealthServiceDefinition, healthService],
    [
      ServerReflectionServiceDefinition,
      await getServerReflectionService([
        CharacterServiceDefinition.fullName,
        HealthServiceDefinition.fullName,
      ]),
    ],
  ] as const

  services.forEach(([ServiceDefinition, service]) => {
    server.add(ServiceDefinition, service)
  })
}

export const teardownServer = async () => {
  terminatorMiddleware.terminate()
  return server.shutdown()
}
