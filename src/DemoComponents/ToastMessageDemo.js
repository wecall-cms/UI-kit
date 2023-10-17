import React from "react";
import ToastMassage from "../components/Toast/Toast";
import { BsXCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillWarning, AiFillInfoCircle } from "react-icons/ai";

const ToastDemo = () => {
  return (
    <div>
      <div>
        <h1>Toast Example</h1>
        <div className="container">
          <div
            style={{ flexDirection: "column", gap: "20px", display: "flex" }}
          >
            <ToastMassage
              status={"error"}
              statusIcon={<BsXCircleFill />}
              title={"Error"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            <ToastMassage
              status={"info"}
              statusIcon={<AiFillInfoCircle />}
              title={"Info"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            <ToastMassage
              status={"warning"}
              statusIcon={<AiFillWarning />}
              title={"Warning"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            <ToastMassage
              status={"success"}
              statusIcon={<BsFillCheckCircleFill />}
              title={"Success"}
              desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastDemo;
