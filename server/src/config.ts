export const config = {
  grpc: {
    port: Number(process.env.GRPC_PORT || '50051'),
  },
} as const
