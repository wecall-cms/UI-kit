import React, { useState } from "react";
import { Avatar, Avatars } from "../components/Avatar/Avatar";

const AvatarDemo = () => {
  const [profile, setProfile] = useState([
    {
      name: "MK",
      class: "mk-text",
      imageUrl:
        "https://images.unsplash.com/photo-1692807774228-021d33de36c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1692807774228-021d33de36c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    },

    {
      imageUrl:
        "https://images.unsplash.com/photo-1692807774228-021d33de36c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    },
  ]);

  return (
    <div>
      <h1>Avatar Example</h1>
      <p>Multiple Avatar (Avatar Group)</p>
      <div className="container">
        <Avatars size={"large"} profile={profile} />
        <Avatars size={"medium"} profile={profile} />
        <Avatars size={"small"} profile={profile} />
        <Avatars size={"xsmall"} profile={profile} />
      </div>

      <p>Single Avatar</p>
      <div className="container">
        <Avatar imageUrl={profile[0].imageUrl} size={"large"} />
        <Avatar imageUrl={profile[0].imageUrl} size={"medium"} />
        <Avatar imageUrl={profile[0].imageUrl} size={"small"} />
        <Avatar imageUrl={profile[0].imageUrl} size={"xsmall"} />
      </div>
    </div>
  );
};

export default AvatarDemo;
