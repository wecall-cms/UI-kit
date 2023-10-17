import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Toast.scss";

const ToastMassage = ({ statusIcon, title, desc, status }) => {
  return (
    <div>
      <div className={`cms__content ${status}`}>
        <div className="cms__header">
          <div className="cms__header_content">
            <div className={`cms__icon ${status}`}>{statusIcon}</div>
            <p>{title}</p>
          </div>

          <AiOutlineClose className="cms__close" />
        </div>
        <div className="cms__body">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ToastMassage;
