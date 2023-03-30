import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { logout, token } = props;
  return (
    <div className="nav">
      {token && <Link to="/profile">Profile</Link>}
      <Link to="/public">Public</Link>
      {token && <button onClick={logout}>logout</button>}
    </div>
  );
};

export default Navbar;
