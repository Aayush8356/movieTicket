import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "../storage/auth.js";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const { myId, isLoggedIn, user } = useAuth();
  const { username, email } = user ?? {};
  // const username= user?.username
  // const email= user?.email
  // const {username,email} =  {}
  // const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // async function getData() {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:5001/user/current/${myId}`
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     const { username, email } = data;
  //     setEmail(email);
  //     setUsername(username);
  //   } catch (error) {
  //     console.log(error, "Login nhi kra tune");
  //     navigate("/login");
  //   }
  // }
  // useEffect(() => {
  //   // getData();
  // }, []);
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
                <NavLink to={"/collection"}>view</NavLink>
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
