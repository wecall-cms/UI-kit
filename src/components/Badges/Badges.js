import React from 'react'
import './Badges.scss'

const Badges = () => {
    return (
        <div>
            <h1>Badges Example</h1>
            <div className='flex'>


                <Badge text="Primary" color="primary" />
                <Badge text="Secondary" color="secondary" />
                <Badge text="Success" color="success" />
                <Badge text="Danger" color="danger" />
                <Badge text="Info" color="info" />
                <Badge text="Warning" color="warning" />
                <Badge text="Light" color="light" />
                <Badge text="" color="danger-circle-round" />
                <Badge text="9" color="danger-circle" />

            </div>
        </div>
    )
}

export default Badges



const Badge = ({ text, color }) => {


    return <div>
        <div className={`cms-badge ${color}`}>
            <p>{text}</p>
        </div>
    </div>
};

