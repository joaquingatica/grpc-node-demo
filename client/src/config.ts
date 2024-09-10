export const config = {
  server: {
    grpcAddress: process.env.SERVER_GRPC_ADDRESS || 'localhost:50051',
  },
} as const
