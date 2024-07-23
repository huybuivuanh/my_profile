import React from "react";
import "../styles/ProfileInfo.css";

function ProfileInfo() {
  return (
    <div className="profile-info">
      <img
        src="images/Homescreen.jpg"
        alt="profile picture"
        className="profile-picture"
      ></img>
      <h1
        className="my-name"
        style={{ fontFamily: "cursive", fontSize: "70px" }}
      >
        Huy Bui
      </h1>
    </div>
  );
}

export default ProfileInfo;
