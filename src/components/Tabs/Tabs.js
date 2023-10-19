import React, { useState } from "react";
import "./Tabs.scss";

const Tab = ({ outlined, size, tabs }) => {
  return (
    <>
      {outlined ? (
        <SecondaryTabComponent size={size} tabs={tabs} />
      ) : (
        <TabComponent size={size} tabs={tabs} />
      )}
    </>
  );
};

const TabComponent = ({ tabs, size }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-component">
      <ul className="tab-list primary-tab">
        {tabs?.map((tab, index) => (
          <li
            key={index}
            className={`tab-item ${size} ${
              index === activeTab ? "active" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SecondaryTabComponent = ({ tabs, size }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-component">
      <ul className="tab-list primary-tab">
        {tabs?.map((tab, index) => (
          <li
            key={index}
            className={`tab-item secondary-tab-item ${
              index === activeTab ? "active" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
