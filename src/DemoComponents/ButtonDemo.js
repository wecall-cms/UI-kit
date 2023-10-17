import React from "react";
import Button from "../components/Buttons/Button";
import { AiOutlinePlus, AiOutlineArrowDown } from "react-icons/ai";

const ButtonDemo = () => {
  return (
    <>
      <h1>Button Example</h1>

      <div className="container">
        <Button
          variant="dark"
          text={"Filled Enable FAB"}
          icon={<AiOutlinePlus />}
        />
        <br />
        <Button
          variant="light"
          text={"Filled Regular FAB"}
          icon={<AiOutlinePlus />}
        />
        <br />
        <Button
          variant="dark-light"
          text={"Filled Standard FAB"}
          icon={<AiOutlinePlus />}
        />
        <br />
        <Button
          variant="outline"
          text={"Outline FAB"}
          icon={<AiOutlinePlus />}
        />
      </div>
    </>
  );
};

export default ButtonDemo;
