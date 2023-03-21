import { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function VoteTracker(props) {
  const { _id, upvotes, downvotes } = props;
  const { userAxios } = useContext(UserContext);
  const [upvote, setUpvote] = useState(upvotes);
  const [downvote, setDownvote] = useState(downvotes);

  function upVote() {
    userAxios
     .put(`/api/polipost/${_id}/upvote`)
     .then((res) => console.log(res.data))
     .catch((err) => console.log(err.response.data.errMsg))
  }

  function downVote() {
    userAxios
      .put(`/api/polipost/${_id}/downvote`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data.errMsg));
  }

  const handleUpvote = () => {
    setUpvote((prevUpVotes) => prevUpVotes + 1)
    upVote(upvotes, _id);
  };

  const handleDownvotes = () => {
    setDownvote((prevDownvotes) => prevDownvotes + 1);
    downVote(downvotes, _id);
  };

  return (
    <div id="vote-tracker">
      <p>Upvotes: {upvote}</p>
      <button onClick={handleUpvote}>UP</button>
      <p>Downvotes: {downvote}</p>
      <button onClick={handleDownvotes}>DOWN</button>
    </div>
  );
}
