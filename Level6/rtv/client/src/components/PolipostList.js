import React from "react";
import Polipost from "./Polipost";

const PolipostList = (props) => {
  const { posts } = props;
  return (
    <div className="polipost-list">
      {posts.map((post) => (
        <Polipost {...post} key={post._id} />
      ))}
    </div>
  );
};

export default PolipostList;
