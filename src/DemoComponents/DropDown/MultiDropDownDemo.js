import React from "react";
import MultiSelectDropDown from "../../components/Multi Select Dropdown/MultuSelectDropdown";

const options = [
  { label: "Grapes", value: "grapes" },
  { label: "Mango", value: "mango" },
  { label: "Strawberry", value: "strawberry", isDisabled: true },
];

const MultiSelectDropDownDemo = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Multi Select Dropdown Example</h1>
          <div className="container">
            <div className="cms__flex">
              <MultiSelectDropDown options={options} size={"small"} />
              <MultiSelectDropDown options={options} size={"medium"} />
              <MultiSelectDropDown options={options} size={"large"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSelectDropDownDemo;
