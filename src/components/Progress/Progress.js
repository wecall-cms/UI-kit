import React, { useEffect, useRef, useState } from "react";
import "./Progress.scss";
import { BsCheck2 } from "react-icons/bs";
// Progress will have 4 types props value
//  1. linear
//  2. stepsLinear
//  3. steps
//  4. range

const Progress = ({ type, value, steps, activeStep, onChange }) => {
  return (
    <>
      {type === "linear" && <ProgressLinear value={value} />}
      {type === "stepsLinear" && "steps linear"}
      {type === "steps" && (
        <ProgressSteps
          steps={steps}
          activeStep={activeStep}
          onChange={onChange}
        />
      )}
      {type === "range" && <ProgressRange value={value} />}
    </>
  );
};

export default Progress;

const ProgressLinear = ({ value }) => {
  return (
    <progress className="progress progress-linear" value={value} max="100" />
  );
};

const ProgressRange = ({ value: propProgress = 0 }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(propProgress);

  useEffect(() => {
    // Update the progress when the prop changes
    setProgress(propProgress);
  }, [propProgress]);

  const handleMouseDown = (event) => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const offsetX = event.clientX - sliderRect.left;
      const newProgress = (offsetX / sliderRect.width) * 100;
      // Round the progress to two decimal places
      const roundedProgress = Math.round(newProgress * 100) / 100;
      setProgress(roundedProgress);
      sliderRef.current.style.setProperty(
        "--progress",
        `${roundedProgress ?? progress}%`
      );
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.setProperty("--progress", `${progress}%`);
    }
  }, [progress]);

  return (
    <div
      className="progress-slider"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="progress-bar"></div>
      <div className="slider-thumb"></div>
    </div>
  );
};

const ProgressSteps = ({ steps, activeStep, onChange }) => {
  if (typeof onChange === "function") {
    onChange(activeStep);
  }

  return (
    <div className="progress-steps">
      <div className="progress-steps-wrapper">
        {steps.map((step, index) => (
          <>
            <div
              className={`progress-step ${
                activeStep === index + 1 && "active"
              } ${activeStep > index + 1 && "completed"}`}
              key={index}
            >
              {activeStep > index + 1 ? (
                <BsCheck2
                  className="progress-completed"
                  color="#3b82f6"
                  fontSize={"1.5rem"}
                />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="progress-step-line" />
          </>
        ))}
      </div>
    </div>
  );
};
