import { HealthServiceImpl as healthService, HealthState } from 'nice-grpc-server-health'

export const healthState = HealthState()

export const getHealthService = async () => healthService(healthState)
