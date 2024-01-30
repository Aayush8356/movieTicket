import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../storage/auth.js";
const Nav = () => {
  const { isLoggedIn, LogoutUser, reload } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <NavLink
        to={"/home"}
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
            {/* < to={"/logout"}> */}
            <button
              onClick={async () => {
                LogoutUser();
                await reload();
                navigate("/login");
              }}
            >
              Logout
            </button>
            {/* </ */}
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
