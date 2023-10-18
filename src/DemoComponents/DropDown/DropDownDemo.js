import React from "react";
import Dropdown from "../../components/Dropdown/Dropdown";

const options = [
  { label: "Zero Two", value: "zerotwo" },
  { label: "Luffy", value: "luffy", isDisabled: true },
  { label: "Robin", value: "robin" },
  { label: "Nami", value: "nami" },
  { label: "Zoro", value: "zoro" },
  { label: "Sanji", value: "sanji" },
];

const DropdownDemo = () => {
  return (
    <div>
      <div>
        <h1>Dropdown Example</h1>
        <div className="container">
          <div className="cms__flex">
            <Dropdown
              error
              options={options}
              size={"small"}
              placeholder={"Small"}
            />
            <Dropdown options={options} size={"medium"} searchable />
            <Dropdown options={options} size={"large"} />
          </div>

          <div className="cms__flex">
            <Dropdown options={options} size={"small"} />
            <Dropdown options={options} size={"medium"} />
            <Dropdown options={options} size={"large"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownDemo;
