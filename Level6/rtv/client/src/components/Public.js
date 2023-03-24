import React, { useState, useEffect } from "react";
import PolipostList from "./PolipostList";
import Polipost from "./Polipost";
import axios from "axios";

const Public = () => {
  const [publicState, setPublicState] = useState();

  function getAllPosts() {
    axios
      .get("/api/polipost")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="public">
      <PolipostList />
    </div>
  );
};

export default Public;
