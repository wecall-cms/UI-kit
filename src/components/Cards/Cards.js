import React, { useState } from "react";
import { AiFillStar, AiFillSetting } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import './Cards.scss'


const Cards = () => {
    return (
        <div>


            <h1>Cards Example</h1>
            <div className="container">
                <ATMCard
                    cardName="Card name"
                    starIcon={<AiFillStar />}
                    listIcon={<BsThreeDotsVertical />}
                    cardHolder="Edited a day ago"
                    settingIcon={<AiFillSetting />}

                />

            </div>
        </div>
    )
}

export default Cards




// ATMCard.js


const ATMCard = ({ cardName, cardHolder, settingIcon, starIcon, listIcon, text }) => {
    const [profile, setProfile] = useState([
        {
            name: "MK",
            class: "mk-text"
        },
        {
            name: "OK",
            class: "ok-text"
        },
      
    ]

    )
    return (
        <div className="atm-card">
            <div className="atm-card__content">
                <div className="atm-card__header">
                    <h2 className="atm-card__bank">{cardName}</h2>
                    <div className="atm-card__icons">
                        {starIcon}
                        {listIcon}

                    </div>

                </div>
                <div className="atm-card__image">

                    {
                        profile.map((i, index) => {
                            return (
                                <div className={`image ${index > 0 ? "seconadry" : ""}`} >

                                    <p className={`${i.class} `}> {i.name}</p>
                                </div>
                            )

                        })
                    }

                </div>
                <div className="atm-card__body">

                    <div className="atm-card__holder">{cardHolder}</div>
                    <div className="atm-card__setting">{settingIcon}</div>
                </div>
            </div>
        </div>
    );
};

