import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import BookpostForm from "./BookpostForm";
import BookpostList from "./BookpostList";
import { UserContext } from "../context/UserProvider";
import useUserBookposts from "../utilities/hooks/useUserBookposts";
import "../css/profile.css";

const Profile = () => {
  const {token, logout} = useContext(UserContext)
  const { userBookposts } = useUserBookposts();

  const {
    user: { username },
    addBookpost,
  } = useContext(UserContext);

  console.log("Profile", userBookposts);

  return (
    <div className="profile">
      <Navbar logout={logout} token={token} />
      <h3>Start a new discussion</h3>
      <BookpostForm addBookpost={addBookpost} />
      <BookpostList
        bookposts={userBookposts.bookposts ? userBookposts.bookposts : []}
      />
    </div>
  );
};

export default Profile;
