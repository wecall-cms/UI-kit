import React from "react";
import "./Button.scss";

const Button = ({ text, icon, variant }) => {
  return (
    <div>
      <button className={`cms-button ${variant}`}>
        {icon}
        <p>{text}</p>
      </button>
    </div>
  );
};

export default Button;
