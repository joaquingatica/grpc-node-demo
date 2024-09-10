import { config } from './config'
import { server, setupServer } from './server'

const start = async () => {
  await setupServer()
  const port = await server.listen(`0.0.0.0:${config.grpc.port}`)
  console.log(`🚀 Server is running in port ${port}`)
}

const shutdown = async () => {
  await server.shutdown()
  console.log('Server gracefully shut down.')
}

start().catch((error) => {
  console.error(error)
  process.exit(1)
})

process.on('SIGINT', () => shutdown().then(() => process.exit(130)))
process.on('SIGTERM', () => shutdown().then(() => process.exit(143)))
