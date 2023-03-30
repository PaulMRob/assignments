import React, { useEffect, useState } from "react";

const useUserBookposts = () => {
  const [userBookposts, setUserBookposts] = useState([]);

  useEffect(() => {
    userAxios("/api/bookpost/user")
      .then((res) => {
        setUserBookposts((prev) => ({
          ...prev,
          bookposts: res.data,
        }));
      })
      .catch((err) => console.log(err.resposne.data.errMsg));
  }, []);

  return {userBookposts};
};

export default useUserBookposts;