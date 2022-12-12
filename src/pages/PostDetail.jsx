import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

const PostDetailPage = () => {
  const [error, setError] = useState("");
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function loadPost() {
      setIsLoading(true);
      try {
        const post = await getPost(id);
        setPost(post);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
    loadPost();
  }, [id]);

  return (
    <>
      {isLoading && <p> Loading........</p>}
      {error && <p>error.message</p>}
      {!error && post && <BlogPost title={post.title} text={post.body} />}
    </>
  );
};

export default PostDetailPage;
