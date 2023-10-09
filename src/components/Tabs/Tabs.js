import React, { useState } from 'react';
import "./Tabs.scss"

const Tabs = () => {
    const tabs = [
        { title: 'Tab 1', },
        { title: 'Tab 2', },
        { title: 'Tab 3', },
    ];

    return (
        <div>
            <h1>Tab Example</h1>
            <TabComponent tabs={tabs} size={"large"} />
            <TabComponent tabs={tabs} size={"medium"} />
            <TabComponent tabs={tabs} size={"small"} />
            <SecondaryTabComponent tabs={tabs} size={"small"} />
        </div>


    )
}

export default Tabs




const TabComponent = ({ tabs, size }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tab-component">
            <ul className="tab-list primary-tab">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`tab-item ${size} ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </li>
                ))}
            </ul>

        </div>
    );
}




const SecondaryTabComponent = ({ tabs, size }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tab-component">
            <ul className="tab-list primary-tab">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className={`tab-item secondary-tab-item ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.title}
                    </li>
                ))}
            </ul>

        </div>
    );
}