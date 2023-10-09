import React from 'react'
import { BsXCircleFill } from "react-icons/bs"
import "./Input.scss"

const Input = () => {
    return (
        <div>
            <div>            <h1>Input Field Example</h1>
                <div className='container'>
                    <div className='cms__flex'>
                        <InactiveInputField placeholder={"Inactive"} size={"small"} />
                        <InactiveInputField placeholder={"Inactive"} size={"medium"} />
                        <InactiveInputField placeholder={"Inactive"} size={"large"} />
                    </div>

                    <div className='cms__flex'>
                        <HoverInputField placeholder={"Hover"} size={"small"} />
                        <HoverInputField placeholder={"Hover"} size={"medium"} />
                        <HoverInputField placeholder={"Hover"} size={"large"} />
                    </div>

                    <div className='cms__flex'>
                        <DisableInputField placeholder={"Disable"} size={"small"} />
                        <DisableInputField placeholder={"Disable"} size={"medium"} />
                        <DisableInputField placeholder={"Disable"} size={"large"} />
                    </div>


                    <div className='cms__flex'>
                        <InputField placeholder={"Activated"} label={"lable*"} size={"small"} />
                        <InputField placeholder={"Activated"} label={"lable*"} size={"medium"} />
                        <InputField placeholder={"Activated"} label={"lable*"} size={"large"} />
                    </div>


                    <div className='cms__flex'>
                        <ErrorInputField placeholder={"Error"} label={"Error*"} size={"small"} />
                        <ErrorInputField placeholder={"Error"} label={"Error*"} size={"medium"} />
                        <ErrorInputField placeholder={"Error"} label={"Error*"} size={"large"} />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Input




function InactiveInputField({ placeholder, size }) {
    return (
        <>
            <input type='text' placeholder={placeholder} className={`cms__InactiveInput ${size}`} />
        </>
    )
}





function HoverInputField({ placeholder, size }) {
    return (
        <>
            <input type='text' placeholder={placeholder} className={`cms__HoverInput ${size}`} />
        </>
    )
}


function DisableInputField({ placeholder, size }) {
    return (
        <>
            <input type='text' placeholder={placeholder} className={`cms__InactiveInput ${size}`} />
        </>
    )
}


function InputField({ placeholder, size, label }) {
    return (
        <>


            <label for="inputelement">{label}

                <input type='text' id="inputelement" placeholder={placeholder} className={`cms__Input ${size}`} />
            </label>
        </>
    )
}


function ErrorInputField({ placeholder, size, label }) {
    return (
        <>


            <label className='cms__label' for="inputelement">{label}

                <input type='text' id="inputelement" placeholder={placeholder} className={`cms__Error__Input ${size}`} />
            </label>
        </>
    )
}