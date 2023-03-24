import React from "react";
import Polipost from "./Polipost";

const PolipostList = (props) => {
  const { posts } = props;
  const savedArr = posts.sort((a, b) => (a.upvotes > b.upvotes ? -1 : 1));
  console.log(savedArr);
  return (
    <div className="polipost-list">
      {savedArr.map((post) => (
        <Polipost
          title={post.title}
          description={post.description}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
          postID={post._id}
          key={post._id}
        />
      ))}
    </div>
  );
};

export default PolipostList;
