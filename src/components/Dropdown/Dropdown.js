import React, { useState } from "react";
import Select from "react-select";
import "./Dropdown.scss";
import { reactSelectCustomStyles } from "../../Constant/SelectStyles";
import BaseDropdown from "./BaseDropdown";

const Dropdown = ({ size, placeholder, options, searchable, error }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <BaseDropdown
      size={size}
      placeholder={placeholder}
      options={options}
      searchable={searchable}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      error={error}
    />
  );
};

export default Dropdown;
