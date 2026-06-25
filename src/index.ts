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
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Post 3",
  //       content: "Content 1",
  //       published: true,
  //       authorName: "John Doe",
  //     },
  //   });
  //   console.log(result);
  // const getAllPostFromDb = await prisma.post.findMany();
  // console.log(getAllPostFromDb);
  //   const getSInglePost = await prisma.post.findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log(getSInglePost);
}

main();
