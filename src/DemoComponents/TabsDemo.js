import React from "react";
import Tab from "../components/Tabs/Tabs";

const TabsDemo = () => {
  const tabs = [{ title: "Tab 1" }, { title: "Tab 2" }, { title: "Tab 3" }];

  return (
    <div>
      <h1>Tab Example</h1>
      <Tab tabs={tabs} size={"large"} />
      <Tab tabs={tabs} size={"medium"} />
      <Tab tabs={tabs} size={"small"} />
      <Tab outlined tabs={tabs} size={"large"} />
    </div>
  );
};

export default TabsDemo;
