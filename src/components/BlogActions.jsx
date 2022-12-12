import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/BlogActions.module.css";

const BlogActions = () => {
  return (
    <div className={classes.actions}>
      <Link className={classes.button} to="/blog/new">
        Add Post
      </Link>
    </div>
  );
};

export default BlogActions;
