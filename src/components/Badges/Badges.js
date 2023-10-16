import React from "react";
import "./Badges.scss";

const Badge = ({ text, color }) => {
  return (
    <div>
      <div className={`cms-badge ${color}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Badge;
