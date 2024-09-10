import { ClientMiddleware, Metadata } from 'nice-grpc'

export const authenticationMiddleware: ClientMiddleware = async function* authenticationMiddleware(
  call,
  context,
) {
  const authToken = process.env.SERVER_GRPC_AUTH_TOKEN
  if (!authToken) {
    return yield* call.next(call.request, context)
  }
  return yield* call.next(call.request, {
    ...context,
    metadata: Metadata(context.metadata).set('Authorization', `Bearer ${authToken}`),
  })
}
