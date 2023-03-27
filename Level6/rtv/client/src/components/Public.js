import React, { useState, useEffect } from "react";
import PolipostList from "./PolipostList";
import Polipost from "./Polipost";
import axios from "axios";

const Public = (props) => {
  const { allPosts } = props;
  const [publicState, setPublicState] = useState();

  return (
    <div className="public">
      <PolipostList posts = {allPosts}/>
    </div>
  );
};

export default Public;
