import React from "react";
import ATMCard from "../components/Cards/Cards";
import { AiFillStar, AiFillSetting } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const CardsDemo = () => {
  return (
    <div>
      <h1>Cards Example</h1>
      <div
        className="container"
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <ATMCard
          cardName="Card name"
          starIcon={<AiFillStar />}
          listIcon={<BsThreeDotsVertical />}
          cardHolder="Edited a day ago"
          settingIcon={<AiFillSetting />}
          settingsRequired
        />
        <ATMCard
          cardName="Card name"
          starIcon={<AiFillStar />}
          listIcon={<BsThreeDotsVertical />}
          cardHolder="Edited a day ago"
          settingIcon={<AiFillSetting />}
          settingsRequired={false}
        />
      </div>
    </div>
  );
};

export default CardsDemo;
