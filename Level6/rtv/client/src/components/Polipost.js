import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import CommentForm from "./CommentForm";

const Polipost = (props) => {
  const { userAxios } = useContext(UserContext);

  const { title, description, postID } = props;

  const [displayComments, setDisplayComments] = useState(false);
  const [comments, setComments] = useState([]);

  function toggleComments() {
    setDisplayComments((prev) => !prev);
    getPostComments(postID);
  }

  function getPostComments(id) {
    userAxios
      .get(`/api/comments/${id}`)
      .then((res) => {
        setComments((prevComments) => [...prevComments, ...res.data]);
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function deleteComment(commentId) {
    userAxios
      .delete(`/api/comments/${commentId}`)
      .then((res) => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment._id !== commentId)
        );
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  // function editComment()

  return (
    <div className="polipost">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <p onClick={toggleComments}>Read Comments</p>
      {displayComments && (
        <div>
          {comments.map((comment) => (
            <div className="comment" key={comment._id}>
              <p>{`${comment.username}: ${comment.comment}`}</p>
              <button onClick={() => deleteComment(comment._id)}>Delete</button>
              <button>Edit</button>
            </div>
          ))}
        </div>
      )}
      <CommentForm
        postID={postID}
        comments={comments}
        setComments={setComments}
      />
    </div>
  );
};

export default Polipost;
