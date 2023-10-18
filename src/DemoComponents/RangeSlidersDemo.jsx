import React, { useState } from "react";
import RangeSliders from "../components/RangeSlider/RangeSlider";

const RangeSlidersDemo = () => {
  return (
    <div>
      <h1>RangeSlider Example</h1>
      <div style={{ padding: "10rem" }}>
        <RangeSliders
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
        <br />
        <br />
        <p>with showing values</p>
        <RangeSliders
          min={0}
          max={100}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          outlined
          showValue
        />
      </div>
    </div>
  );
};

export default RangeSlidersDemo;
