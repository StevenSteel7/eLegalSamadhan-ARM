// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// add prisma to the NodeJS global type
interface CustomNodeJsGlobal {
  prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJsGlobal;

const prisma = global.prisma || new PrismaClient({
  log: ['query'], // Optional: log database queries
});

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

export default prisma;