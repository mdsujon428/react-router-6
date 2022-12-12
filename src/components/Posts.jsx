import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Posts.module.css";

const Posts = ({ blogPost }) => {
  return (
    <ul className={classes.posts}>
      {blogPost.map((post) => (
        <li key={post.id}>
          <Link to={post.id.toString()}>
            <h2>{post.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
