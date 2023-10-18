import React, { useEffect, useRef, useState } from "react";
import "./Progress.scss";
// Progress will have 4 types props value
//  1. linear
//  2. stepsLinear
//  3. steps
//  4. range

const Progress = ({ type, progress, min, max }) => {
  return (
    <>
      {type === "linear" && <ProgressLinear progress={progress} />}
      {type === "stepsLinear" && "steps linear"}
      {type === "steps" && "steps"}
      {type === "range" && (
        <ProgressRange progress={progress} min={min} max={max} />
      )}
    </>
  );
};

export default Progress;

const ProgressLinear = ({ progress }) => {
  return (
    <progress className="progress progress-linear" value={progress} max="100" />
  );
};

const ProgressRange = ({ progress: propProgress = 0 }) => {
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
