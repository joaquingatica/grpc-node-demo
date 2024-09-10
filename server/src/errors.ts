export const toError = (error: unknown): Error => {
  if (error instanceof Error) {
    return error
  }
  if (typeof error === 'string') {
    return new Error(error)
  }
  if (typeof error === 'undefined') {
    return new Error('Unexpected undefined error')
  }
  if (error === null) {
    return new Error('Unexpected null error')
  }
  try {
    return new Error(JSON.stringify(error))
  } catch (e) {
    return new Error(`Serialize error failed: ${e}`)
  }
}
