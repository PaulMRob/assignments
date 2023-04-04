import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../css/nav.css"

const Navbar = (props) => {
  const { token, logout } = props;

  return (
    <div className="nav">
      {token && <Link to="/profile">Profile</Link>}
      <Link to="/public">Public</Link>
      {token && <button onClick={logout}>logout</button>}
    </div>
  );
};

export default Navbar;
