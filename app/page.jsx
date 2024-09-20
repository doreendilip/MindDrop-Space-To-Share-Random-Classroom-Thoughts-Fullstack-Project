import Link from "next/link";
import Post from "./components/Post";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";

// Fetch posts from the database
async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {published: true},
    include: {
      author: {
        select: {name: true}
      }
    }
  });
  return posts;
}

// Main page component
export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <Link href={'/add-post'}>Add Post</Link>
      <h1>📚 MindDrop- Your Space For Random Classroom Thoughts 💭 (lol, you won't be exposed!)</h1>
      <p className={styles.subtext}>Share your thoughts anonymously or non-anonymously!</p>
      <div className={styles.postsContainer}>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author ? post.author.name : "Anonymous"} 
            />
          );
        })}
      </div>
    </main>
  );
}
