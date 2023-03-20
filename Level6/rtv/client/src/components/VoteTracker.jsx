import { useState } from "react";

export default function VoteTracker({
  _id,
  initialUpvotes = 0,
  initialDownvotes = 0,
}) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);

  const handleUpvote = () => {
    setUpvotes((prevUpvotes) => prevUpvotes + 1);
    // update object in database
  };

  const handleDownvotes = () => {
    setDownvotes((prevDownvotes) => prevDownvotes + 1);
    // update object in database
  };

  return (
    <div id="vote-tracker">
      <p>Upvotes: {upvotes}</p>
      <button onClick={handleUpvote}>UP</button>
      <p>Downvotes: {downvotes}</p>
      <button onClick={handleDownvotes}>DOWN</button>
    </div>
  );
}
