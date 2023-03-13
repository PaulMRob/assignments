import React, { useContext } from "react";
import PolipostForm from "./PolipostForm";
import PolipostList from "./PolipostList";
import Polipost from "./Polipost";
import { UserContext } from "../context/UserProvider";

const Profile = () => {

  const {
    user: { username },
    addPost,
    posts,
  } = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Welcome @{username}</h1>
      <h3>Post something!</h3>
      <PolipostForm addPost={addPost} />
      <h3>Your Poliposts</h3>
      <PolipostList posts={posts} />
    </div>
  );
};

export default Profile;
