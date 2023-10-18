import React, { useState } from "react";
import Progress from "../components/Progress/Progress";

const steps = [
  {
    label: "Step 1",
    description: "Step 1 description",
  },
  {
    label: "Step 2",
    description: "Step 2 description",
  },
  {
    label: "Step 3",
    description: "Step 3 description",
  },
  {
    label: "Step 4",
    description: "Step 4 description",
  },
];

const ProgressDemo = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div>
      <h1>Progress Indicator Example</h1>
      <div className="container">
        <p>Linear</p>
        <Progress type="linear" value={30} />
        <br />
        <br />
        <p>Range</p>
        <Progress type="range" value={30} />
        <br />
        <br />
        <p> Progress Steps</p>
        <Progress type="steps" steps={steps} activeStep={activeStep} />
        {/* <button onClick={() => setActiveStep(activeStep + 1)}>Next</button>
        <button onClick={() => setActiveStep(activeStep - 1)}>Prev</button> */}
      </div>
    </div>
  );
};

export default ProgressDemo;
