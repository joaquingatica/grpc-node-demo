import { characterClient } from './clients/character'
import { healthClient } from './clients/health'
import { HealthCheckResponse_ServingStatus } from './schema/grpc/health/v1/health'

const main = async () => {
  const { status } = await healthClient.check({})
  if (status !== HealthCheckResponse_ServingStatus.SERVING) {
    console.error('Server is not healthy. Status:', status)
    return
  }
  console.log('Server healthy, fetching characters...')
  const { characters } = await characterClient.getCharacters({})
  console.log('Characters:', characters)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
