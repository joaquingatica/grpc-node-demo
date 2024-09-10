import { isAbortError } from 'abort-controller-x'
import { CallContext, ServerError, ServerMiddlewareCall, Status } from 'nice-grpc'

import { toError } from '../errors'

export async function* loggingMiddleware<Request, Response>(
  call: ServerMiddlewareCall<Request, Response>,
  context: CallContext,
) {
  const { path } = call.method
  console.log(`[${path}]`, 'start')
  try {
    const result = yield* call.next(call.request, context)
    console.log(`[${path}]`, 'end: OK')
    return result
  } catch (error) {
    if (error instanceof ServerError) {
      console.log(`[${path}]`, `end: ${Status[error.code]}: ${error.details}`)
    } else if (isAbortError(error)) {
      console.log(`[${path}]`, 'cancel')
    } else {
      console.log(`[${path}]`, `error: ${toError(error).stack}`)
    }
    throw error
  }
}
