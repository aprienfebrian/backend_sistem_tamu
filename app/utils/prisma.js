// @ts-nocheck
require("dotenv/config");
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("@prisma/client");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

if (!global.__prisma) {
  global.__prisma = new PrismaClient({
    adapter,
    log: ["query", "info", "warn", "error"],
  });
}

const prisma = global.__prisma;

module.exports = prisma;
