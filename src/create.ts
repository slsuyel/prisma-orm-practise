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
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "Post 3",
  //       content: "Content 1",
  //       published: true,
  //       authorName: "John Doe",
  //     },
  //   });
  //   console.log(result);

  const createManyPost = await prisma.post.createMany({
    data: [
      {
        title: "Post 1",
        content: "Content 1",
        published: true,
        authorName: "John Doe",
      },
      {
        title: "Post 2",
        content: "Content 2",
        published: true,
        authorName: "John Doe",
      },
      {
        title: "Post 3",
        content: "Content 3",
        published: true,
        authorName: "John Doe",
      },
    ],
  });
  console.log(createManyPost);
}

main();
