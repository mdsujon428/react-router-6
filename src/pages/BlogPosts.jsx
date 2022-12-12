import React, { useEffect, useState } from "react";
import Posts from "../components/Posts";
import { getPosts } from "../util/api";

const BlogPostsPage = () => {
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      setIsLoading(true);
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
    loadPosts();
  }, []);

  return (
    <>
      <h1>Our Blog Post </h1>
      {isLoading && <h4>Loading Post......</h4>}
      {error && <h4>{error}</h4>}
      {!error && posts && <Posts blogPost={posts} />}
    </>
  );
};

export default BlogPostsPage;
