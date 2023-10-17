import React, { useState } from "react";
import "./Cards.scss";

// ATMCard.js
const profile = [
  {
    name: "MK",
    class: "mk-text",
  },
  {
    name: "OK",
    class: "ok-text",
  },
];

const ATMCard = ({
  cardName,
  cardHolder,
  settingIcon,
  starIcon,
  listIcon,
  settingsRequired,
  text,
}) => {
  return (
    <div className="atm-card">
      <div className="atm-card__content">
        <div className="atm-card__header">
          <h2 className="atm-card__bank">{cardName}</h2>
          <div className="atm-card__icons">
            {settingsRequired && starIcon}
            {listIcon}
          </div>
        </div>
        <div className="atm-card__image">
          {profile.map((i, index) => {
            return (
              <div className={`image ${index > 0 ? "seconadry" : ""}`}>
                <p className={`${i.class} `}> {i.name}</p>
              </div>
            );
          })}
        </div>
        <div className="atm-card__body">
          <div className="atm-card__holder">{cardHolder}</div>
          {settingsRequired && (
            <div className="atm-card__setting">{settingIcon}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ATMCard;
