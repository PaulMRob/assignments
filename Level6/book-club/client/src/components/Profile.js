import React, { useContext, useEffect } from "react";
import BookpostForm from "./BookpostForm";
import BookpostList from "./BookpostList";
import Bookpost from "./Bookpost";
import { UserContext } from "../context/UserProvider";

const Profile = () => {
  const {
    user: { username },
    addBookpost,
    bookposts,
    getUserBookposts,
  } = useContext(UserContext);

  useEffect(() => {
    getUserBookposts();
  }, []);

  return (
    <div className="profile">
      <h1>Welcome @{username}</h1>
      <h3>Post something!</h3>
      <BookpostForm addBookpost={addBookpost} />
      <h3>Your Bookposts</h3>
      <BookpostList bookposts={bookposts} />
    </div>
  );
};

export default Profile;
