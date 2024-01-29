import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../storage/auth.js";
const Nav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="navbar">
      <NavLink
        to={"/"}
        style={{
          textDecoration: "none",
          color: "GrayText",
          fontSize: "2rem",
        }}
      >
        Moviezz..
      </NavLink>

      <div className="auth-button">
        <Link to={"/about"}>
          <button>About</button>
        </Link>
        {isLoggedIn ? (
          <>
            <Link to={"/Profile"}>
              <button>Profile</button>
            </Link>
            <Link to={"/logout"}>
              <button>Logout</button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/"}>
              <button>Signup</button>
            </Link>
            <Link to={"/login"}>
              <button>Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
