import { CallContext, ServerError, ServerMiddlewareCall, Status } from 'nice-grpc'

type AuthState = 'authorized' | 'unauthorized'

export type AuthCallContextExt = {
  auth: AuthState
}

const authToken = process.env.GRPC_AUTH_TOKEN

export const authenticationMiddleware = () =>
  async function* <Request, Response>(
    call: ServerMiddlewareCall<Request, Response, AuthCallContextExt>,
    context: CallContext,
  ) {
    if (!authToken) {
      return yield* call.next(call.request, {
        ...context,
        auth: 'authorized',
      })
    }

    const authorization = context.metadata.get('authorization')
    if (authorization == null) {
      throw new ServerError(Status.UNAUTHENTICATED, 'Authorization metadata is required')
    }

    const parts = authorization.toString().split(' ')
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      throw new ServerError(
        Status.UNAUTHENTICATED,
        'Invalid Authorization metadata format. Expected "Bearer <token>"',
      )
    }

    const token = parts[1]
    if (token !== authToken) {
      throw new ServerError(
        Status.UNAUTHENTICATED,
        'Invalid token. Please provide a valid token in the Authorization metadata',
      )
    }

    return yield* call.next(call.request, {
      ...context,
      auth: 'authorized',
    })
  }
