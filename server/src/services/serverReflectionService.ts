import fs from 'node:fs/promises'
import path from 'node:path'

import { ServerReflection } from 'nice-grpc-server-reflection'

import { toError } from '../errors'

const descriptorSetPath = path.resolve(process.cwd(), 'bin', 'descriptor_set.bin')

export const getServerReflectionService = async (serviceNames: string[]) => {
  try {
    const descriptorSet = await fs.readFile(descriptorSetPath)
    return ServerReflection(descriptorSet, serviceNames)
  } catch (error) {
    throw new Error(`Failed to read descriptor_set.bin: ${toError(error).message}`)
  }
}
