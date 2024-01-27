import React from "react";
import { Link } from "react-router-dom";
const Nav = ({ about = "About", login = "login", signup = "SignUp", show }) => {
  return (
    <div className="navbar">
      <Link
        to={"/"}
        style={{
          textDecoration: "none",
          color: "GrayText",
        }}
      >
        <h1 id="title">MOVIEZZ . . .</h1>
      </Link>
      <div
        className="auth-button"
        style={{
          display: { show },
        }}
      >
        <Link to={"/about"}>
          <button>{about}</button>
          <Link to={"/"}>
            <button>{signup}</button>
          </Link>
        </Link>
        <Link to={"/login"}>
          <button>{login}</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
