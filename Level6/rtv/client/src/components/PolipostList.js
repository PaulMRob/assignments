import React from "react";
import Polipost from "./Polipost";

const PolipostList = (props) => {
  const { posts } = props;

  return (
    <div className="polipost-list">
      {posts.map((post) => (
        <Polipost
          title={post.title}
          description={post.description}
          postID={post._id}
          key={post._id}
        />
      ))}
    </div>
  );
};

export default PolipostList;
