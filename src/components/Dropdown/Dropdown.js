import React, { useState } from "react";
import Select from "react-select";
import "./Dropdown.scss";

const reactSelectCustomStyles = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#000",
    "&:hover": {
      color: "#2563EB",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    textAlign: "left",
    "&:hover": {
      border: "1.5px solid #2563EB",
      // Change dropdownIndicator color on control hover
      svg: {
        color: "#2563EB",
      },
    },
  }),
  //   menu: (provided, state) => ({}),
  option: (provided, state) => ({
    ...provided,
    textAlign: "left",
    "&:hover": {
      backgroundColor: "#DBEAFE",
      color: "#000",
    },
  }),
};

const Dropdown = ({ size, placeholder, options, searchable }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="App">
      <Select
        placeholder={placeholder}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        className={`cms__dropdown ${size}`}
        styles={reactSelectCustomStyles}
        isSearchable={searchable ? true : false}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default Dropdown;
