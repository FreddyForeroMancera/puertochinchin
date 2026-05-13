import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// Solo inicializamos Prisma si existe la URL de la base de datos
export const prisma = typeof process.env.DATABASE_URL === 'string'
  ? (globalForPrisma.prisma || new PrismaClient())
  : null;

if (process.env.NODE_ENV !== 'production' && prisma) {
  globalForPrisma.prisma = prisma;
}
