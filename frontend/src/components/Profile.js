import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../storage/auth.js";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { user, isLoggedIn } = useAuth();
  const [username, setusername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate();
  // const renderMe = () => {
    if (isLoggedIn) {
      setusername(user.username);
      setEmail(user.email);
      console.log(username, email);
    } else {
      console.log("not logged in");
      navigate("/logout");
    }
  };
  // useEffect(() => {
  //   renderMe();
  // });

  return (
    <>
      <div className="profile-heading">{username}'s Profile</div>
      <div className="main-profile-box">
        <div className="main-profile">
          <div className="profile-container">
            <div className="usr list">
              <div className="key">Username</div>
              <div className="value">{username}</div>
            </div>
            <div className="email list">
              <div className="key">Email</div>
              <div className="value">{email}</div>
            </div>
            <div className="list">
              <div className="key">My collections</div>
              <div className="value">
                <NavLink to={`/${user.username}/mycollections`}>view</NavLink>
              </div>
            </div>
            <div className="list">
              <div className="key">Playlist</div>
              <div className="value">
                <NavLink to={"/playlist"}>view</NavLink>
              </div>
            </div>
            <div className="list">
              <NavLink to={"/logout"}>Logout</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
