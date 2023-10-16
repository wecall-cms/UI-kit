import React, { useState } from "react";
import "./Avatar.scss";

const Avatars = ({ profile, size }) => {
  return (
    <div>
      <ul className="avatar__image">
        {profile.map((i, index) => (
          <li
            className={`avatar__list ${index > 0 ? `secondary ${size}` : ""}`}
            key={index}
          >
            <img className={`${size}`} src={i.imageUrl} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// single avatar component
const Avatar = ({ imageUrl, size }) => {
  return (
    <div>
      <img className={`${size}`} src={imageUrl} alt="avatar" />
    </div>
  );
};

export { Avatar, Avatars };
