import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

const CommentForm = (props) => {
  const [comment, setComment] = useState({
    comment: "",
  });

  const { postID, comments, setComments } = props;

  const { userAxios } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setComment((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addComment(postID, comment);
    setComment({comment:""})
  }

  function addComment(id, newComment) {
    userAxios
      .post(`/api/comments/${id}`, newComment)
      .then((res) => {
        setComments((prevComments) => [...prevComments, res.data]);
      })
      .catch((err) => console.log(err.resposne.data.errMsg));
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Comment</button>
      <input
        type="text"
        value={comment.comment}
        name="comment"
        onChange={handleChange}
        placeholder="Write Comment Here..."
      />
    </form>
  );
};

export default CommentForm;
