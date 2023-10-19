import React from "react";
import { DisableInputField, ErrorInputField, HoverInputField, InactiveInputField, InputField } from "../components/Input/Input";

const InputDemo = () => {
  return (
    <div>
      <div>
        {" "}
        <h1>Input Field Example</h1>
        <div className="container">
          <div className="cms__flex">
            <InactiveInputField placeholder={"Inactive"} size={"small"} />
            <InactiveInputField placeholder={"Inactive"} size={"medium"} />
            <InactiveInputField placeholder={"Inactive"} size={"large"} />
          </div>

          <div className="cms__flex">
            <HoverInputField placeholder={"Hover"} size={"small"} />
            <HoverInputField placeholder={"Hover"} size={"medium"} />
            <HoverInputField placeholder={"Hover"} size={"large"} />
          </div>

          <div className="cms__flex">
            <DisableInputField placeholder={"Disable"} size={"small"} />
            <DisableInputField placeholder={"Disable"} size={"medium"} />
            <DisableInputField placeholder={"Disable"} size={"large"} />
          </div>

          <div className="cms__flex">
            <InputField
              placeholder={"Activated"}
              label={"lable*"}
              size={"small"}
            />
            <InputField
              placeholder={"Activated"}
              label={"lable*"}
              size={"medium"}
            />
            <InputField
              placeholder={"Activated"}
              label={"lable*"}
              size={"large"}
            />
          </div>

          <div className="cms__flex">
            <ErrorInputField
              placeholder={"Error"}
              label={"Error*"}
              size={"small"}
            />
            <ErrorInputField
              placeholder={"Error"}
              label={"Error*"}
              size={"medium"}
            />
            <ErrorInputField
              placeholder={"Error"}
              label={"Error*"}
              size={"large"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputDemo;
