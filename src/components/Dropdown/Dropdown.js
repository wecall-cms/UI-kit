import React, { useState } from "react";
import Select from "react-select";
import "./Dropdown.scss";
import { reactSelectCustomStyles } from "../../Constant/SelectStyles";

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
