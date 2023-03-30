import React, { useState, useEffect } from "react";
import BookpostList from "./BookpostList";
import Bookpost from "./Bookpost";
import axios from "axios";

const Public = (props) => {
  const { allBookposts } = props;
  const [publicState, setPublicState] = useState();

  return (
    <div className="public">
      <BookpostList posts = {allBookposts}/>
    </div>
  );
};

export default Public;
