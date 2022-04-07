//this is how to make a comment section using useState hook
import React, { useState } from "react";

function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = [];

    arr.push(...comments, comment);

    setComments(arr);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="add comment here"
          onChange={(e) => setComment(e.target.value)}
        />
        <button>Submit</button>
      </form>

      {comments.map((element) => (
        <h1>{element}</h1>
      ))}
    </>
  );
}

export default Comments;
