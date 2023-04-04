import React, { useEffect, useState } from "react";
import userAxios from "../userAxios";

const useGetAllBookposts = (props) => {
  const { allBookposts, setAllBookposts } = props;

  useEffect(() => {
    userAxios("/api/bookpost")
      .then((res) => {
        setAllBookposts(res.data);
      })
      .catch((err) => console.log(err.resposne.data.errMsg));
  }, []);
    console.log(allBookposts)
  return { allBookposts };
};

export default useGetAllBookposts;
