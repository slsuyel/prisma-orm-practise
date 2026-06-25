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

  const posts = Array.from({ length: 100 }, (_, i) => ({
    title: `Post ${i + 1}`,
    content: `Content for Post ${i + 1}`,
    published: (i + 1) % 2 === 0,
    authorName: `Author ${i + 1}`,
  }));

  const createManyPost = await prisma.post.createMany({
    data: posts,
  });
  console.log(createManyPost);
}

main();
