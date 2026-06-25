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

  // 1. Update a single post by ID (will fail if ID 2 does not exist)
  // try {
  //   const updatedPost = await prisma.post.update({
  //     where: {
  //       id: 2,
  //     },
  //     data: {
  //       title: "Updated Title for Post 2",
  //       content: "Updated Content for Post 2",
  //     },
  //   });
  //   console.log("Updated post:", updatedPost);
  // } catch (error: any) {
  //   console.log("\n⚠️ Update failed: Post with ID 2 was not found.");
  //   console.log(
  //     "Reason: Since we previously deleted posts, PostgreSQL's auto-incrementing ID sequence has moved past 2. The existing posts have higher IDs.",
  //   );
  //   console.log(
  //     "You can check the current IDs in Prisma Studio or by running a find query.\n",
  //   );
  // }

  // 2. Safe alternative: Upsert (Update if exists, Create if not)
  // console.log("Running safe upsert for Post 2...");
  // const upsertedPost = await prisma.post.upsert({
  //   where: {
  //     id: 2,
  //   },
  //   update: {
  //     title: "Updated Title for Post 2 (via Upsert)",
  //     content: "Updated Content for Post 2 (via Upsert)",
  //   },
  //   create: {
  //     id: 2,
  //     title: "Post 2",
  //     content: "Content 2",
  //     published: true,
  //     authorName: "John Doe",
  //   },
  // });
  // console.log("Upserted post:", upsertedPost);

  // 3. Update multiple posts matching a condition
  // const updateManyResult = await prisma.post.updateMany({
  //   where: {
  //     title: "Post 2",
  //   },
  //   data: {
  //     published: true,
  //   },
  // });
  // console.log("Updated many posts result:", updateManyResult);

  const upsertData = await prisma.post.upsert({
    where: {
      id: 17,
    },
    update: {
      authorName: "Suyel haque",
    },
    create: {
      title: "Title 2",
      content: "content 2",
    },
  });

  console.log(upsertData);
}

main();
