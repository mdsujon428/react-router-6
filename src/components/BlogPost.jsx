import React from "react";
import classes from "../styles/BlogPost.module.css";
const BlogPost = ({ title, text }) => {
  return (
    <article className={classes.post}>
      <h1>{title}</h1>
      <p>{text}</p>
    </article>
  );
};

export default BlogPost;
