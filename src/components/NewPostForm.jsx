import React from "react";
import classes from "../styles/NewPostForm.module.css";
const NewPostForm = ({ onCancel, onSubmit, submitting }) => {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input type="text" name="text" id="title" required minLength={5} />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Post Text</label>
        <textarea
          id="text"
          name="post-text"
          cols="30"
          rows={5}
          minLength={10}
        ></textarea>
        <button type="button" onClick={onCancel} disabled={submitting}>
          Cancel
        </button>
        <button disabled={submitting}>
          {submitting ? "Submitting" : "Create Post"}
        </button>
      </fieldset>
    </form>
  );
};

export default NewPostForm;
