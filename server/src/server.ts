import { createServer } from 'nice-grpc'
import { HealthDefinition as HealthServiceDefinition } from 'nice-grpc-server-health'
import { ServerReflectionService } from 'nice-grpc-server-reflection'

import { getHealthService } from './services/healthService'
import { getServerReflectionService } from './services/serverReflectionService'

export const server = createServer()

export const setupServer = async () => {
  const healthService = await getHealthService()

  const services = [
    [HealthServiceDefinition, healthService],
    [ServerReflectionService, await getServerReflectionService([HealthServiceDefinition.fullName])],
  ] as const

  services.forEach(([ServiceDefinition, service]) => {
    server.add(ServiceDefinition, service)
  })
}
