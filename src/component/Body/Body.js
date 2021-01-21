import React from "react";
import BodyWigget from "./Body-wigget/Body-wigget";
import Profile from "./Profile-bar/Profile";

export default function Body(props) {
  return (
    <div className="body-wrapper scrollable">
      <Profile />
      <BodyWigget />
    </div>
  );
}
