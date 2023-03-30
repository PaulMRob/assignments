import React, { useContext, useEffect } from "react";
import BookpostForm from "./BookpostForm";
import BookpostList from "./BookpostList";
import { UserContext } from "../context/UserProvider";
import useUserBookposts from "../utilities/hooks/useUserBookposts";
import "../css/profile.css"

const Profile = () => {

  const {userBookposts} = useUserBookposts

  const {
    user: { username },
    addBookpost,
    bookposts,
  } = useContext(UserContext);


  return (
    <div className="profile">
      <h1>Welcome @{username}</h1>
      <h3>Start a new discussion</h3>
      <BookpostForm addBookpost={addBookpost} />
      <BookpostList bookposts={userBookposts} />
    </div>
  );
};

export default Profile;
