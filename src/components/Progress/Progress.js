import React from "react";
import "./Progress.scss";
// Progress will have 4 types props value
//  1. linear
//  2. stepsLinear
//  3. steps
//  4. range

const Progress = ({ type, progress }) => {
  return (
    <>
      {type === "linear" && "linear"}
      {type === "stepsLinear" && <ProgressLinear progress={progress} />}
      {type === "steps" && "steps"}
      {type === "range" && "range"}
    </>
  );
};

export default Progress;

const ProgressLinear = ({ progress }) => {
  return (
    <progress className="progress progress-linear" value={progress} max="100" />
  );
};
