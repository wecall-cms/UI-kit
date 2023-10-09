import React, { useState } from 'react'
import './Avatar.scss'


const Avatar = () => {

    const [profile, setProfile] = useState([
        {
            name: "MK",
            class: "mk-text",
            imageUrl: "https://images.unsplash.com/photo-1692807774228-021d33de36c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"

        },
        {
            imageUrl: "https://images.unsplash.com/photo-1692807774228-021d33de36c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
        },

        {
            imageUrl: "https://images.unsplash.com/photo-1692807774228-021d33de36c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
        },
    ]);

    return (
        <div>
            <h1>Avatar Example</h1>
            <div className='container'>
                <Avatars size={"large"} profile={profile} />
                <Avatars size={"medium"} profile={profile} />
                <Avatars size={"small"} profile={profile} />
                <Avatars size={"xsmall"} profile={profile} />

            </div>

        </div>
    )
}

export default Avatar

const Avatars = ({ profile, size }) => {

    return (
        <div>
            <ul className="avatar__image">
                {profile.map((i, index) => (
                    <li className={`avatar__list ${index > 0 ? `secondary ${size}` : ""}`} key={index}>
                        <img className={`${size}`} src={i.imageUrl} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
