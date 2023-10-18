import React from "react";
import Progress from "../components/Progress/Progress";

const ProgressDemo = () => {
  return (
    <div>
      <h1>Progress Indicator Example</h1>
      <div className="container">
        <p>Linear</p>
        <Progress type="linear" progress={30} />
        <br />
        <br />
        <p>Range</p>
        <Progress type="range" progress={30} />

        <Progress progress={50} />
      </div>
    </div>
  );
};

export default ProgressDemo;
