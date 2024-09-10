import { healthClient } from './clients'

const main = async () => {
  const { status } = await healthClient.check({})
  console.log('Server health status:', status)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
