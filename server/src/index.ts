import { config } from './config'
import { server, setupServer } from './server'

const serverShutdown = async () => {
  await server.shutdown()
  console.log('Server gracefully shut down.')
}
process.on('SIGINT', () => serverShutdown().then(() => process.exit(130)))
process.on('SIGTERM', () => serverShutdown().then(() => process.exit(143)))

const main = async () => {
  await setupServer()
  const port = await server.listen(`0.0.0.0:${config.grpc.port}`)
  console.log(`🚀 Server is running in port ${port}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
