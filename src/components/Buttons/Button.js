import React from 'react'
import "./Button.scss"
import { AiOutlinePlus, AiOutlineArrowDown } from "react-icons/ai"

const Button = () => {
    return (
        <>
            <h1>Button Example</h1>

        <div className='container'>
            <EnableButton variant="dark" text={"Filled Enable FAB"} icon={<AiOutlinePlus />} />
            <br />
            <EnableButton variant="light" text={"Filled Regular FAB"} icon={<AiOutlinePlus />} />
            <br />
            <EnableButton variant="dark-light" text={"Filled Standard FAB"} icon={<AiOutlinePlus />} />
            <br />
            <EnableButton variant="outline" text={"Outline FAB"} icon={<AiOutlinePlus />} />
        </div>
        </>
    )
}

export default Button


const EnableButton = ({ text, icon, variant }) => {
    return (
        <div>
            <button className={`cms-button ${variant}`}>
                {icon}
                <p>{text}</p>
            </button>
        </div>
    )
}

