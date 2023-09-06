import { PrismaClient } from '@prisma/client';

// In the development, during hot reloading if there is already a prismadb client, use that one and not create a new one
const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === 'production') {
  global.prismadb = client;
}

export default client;
