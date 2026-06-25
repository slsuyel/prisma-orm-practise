import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function pagination() {
  console.log("prisma running ");

  //   const offSetData = await prisma.post.findMany({
  //     skip: 0,
  //     take: 10,
  //     select: {
  //       id: true,
  //       title: true,
  //       createdAt: true,
  //       updatedAt: true,
  //     },
  //   });
  //   console.log(offSetData);
  // 1. Let's fetch some existing posts to see their actual IDs
  // cursor based pagination
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 15,
    },
  });

  console.log("cursor based paginated data: ", cursorData);
}

pagination();
