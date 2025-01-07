import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="d-none">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profilepage">Profile</Link>
        </li>
        <li>
          <Link to="/accountpage">Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
