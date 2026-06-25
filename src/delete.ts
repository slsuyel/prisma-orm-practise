import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("prisma running ");

  // Delete a single post
  const deletedPost = await prisma.post.delete({
    where: {
      id: 1,
    },
  });
  console.log("Deleted post:", deletedPost);

  // const deleteResult = await prisma.post.deleteMany();
  // console.log("Deleted all posts:", deleteResult);
}

main();
