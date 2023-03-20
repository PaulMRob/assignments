import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

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
    userAxios(`/api/comments/${id}`)
      .then((res) => {

        setComments((prevComments) => ([
          ...prevComments,
          ...res.data
        ]))
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function addComment() {}

  // function deleteComment()

  // function editComment()

  return (
    <div className="polipost">
      <h1>{title}</h1>
      <h3>{description}</h3>
      <p onClick={toggleComments}>Read Comments</p>
      {displayComments && (
        <div>
          {comments.map((comment) => (
            <p key={comment._id}>{`${comment.username}: ${comment.comment}`}</p>
            <button>Comment</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Polipost;
