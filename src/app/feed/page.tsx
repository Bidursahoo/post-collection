import Posts from "../../../components/posts";
import { getPosts } from "../../../lib/posts";

type Post = {
  id: string; // Or 'number' depending on your database schema
  title: string;
  userFirstName: string;
  createdAt: string; // Could be 'Date' if you are converting to Date objects
  image: string; // Assuming 'image' is a URL string
  content: string;
};

export default async function FeedPage() {
  const posts: Post[] = await getPosts(); // Corrected type annotation

  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
