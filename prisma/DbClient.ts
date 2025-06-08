import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const DbClient =
  globalThis.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "development") globalThis.prisma = DbClient;

export const connectPrisma = async () => {
  try {
    await DbClient.$connect();
    console.log("Connected to the database successfully");
    return true;
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    return false;
  }
};

process.on("beforeExit", async () => {
  await DbClient.$disconnect();
});
