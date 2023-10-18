import React from "react";
import Progress from "../components/Progress/Progress";

const ProgressDemo = () => {
  return (
    <div>
      <h1>Progress Indicator Example</h1>
      <div className="container">
        <Progress type="stepsLinear" progress={30} />
      </div>
    </div>
  );
};

export default ProgressDemo;
