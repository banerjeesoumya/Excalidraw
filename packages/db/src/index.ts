import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()


// export { prisma } from './client' // exports instance of prisma 
// export * from "./generated/prisma" 
// // exports generated types from prisma