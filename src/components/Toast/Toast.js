import React from 'react'
import { BsXCircleFill, BsFillCheckCircleFill } from "react-icons/bs"
import { AiOutlineClose, AiFillWarning, AiFillInfoCircle } from "react-icons/ai"
import "./Toast.scss"

const Toast = () => {
    return (
        <div>
            <div>
                <h1>Toast Example</h1>
                <div className='container'>
                    <div style={{ flexDirection: "column", gap: "20px", display: "flex" }}>


                        <ToastMassage status={"error"} statusicon={<BsXCircleFill />} title={"Error"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <ToastMassage status={"info"} statusicon={<AiFillInfoCircle />} title={"Info"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <ToastMassage status={"warning"} statusicon={<AiFillWarning />} title={"Warning"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                        <ToastMassage status={"success"} statusicon={<BsFillCheckCircleFill />} title={"Success"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Toast


function ToastMassage({ statusicon, title, desc, status }) {
    return (
        <div>
            <div className={`cms__content ${status}`}>
                <div className='cms__header'>
                    <div className='cms__header_content'>
                        <div className={`cms__icon ${status}`}>
                            {statusicon}

                        </div>
                        <p>{title}</p>
                    </div>

                    <AiOutlineClose />

                </div>
                <div className='cms__body'>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    )
}