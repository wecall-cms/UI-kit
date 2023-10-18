import React from "react";
import Select from "react-select";

const BaseDropdown = ({
  size,
  placeholder,
  options,
  searchable,
  selectedOption,
  setSelectedOption,
  error,
}) => {
  const reactSelectCustomStyles = {
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#000",
      "&:hover": {
        color: error ? "#DC2626" : "#2563EB",
      },
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      textAlign: "left",
      display: "flex",
      flexWrap: "nowrap",
      fontSize: "14px",
      fontWeight: "400",
      svg: {
        color: error ? "#DC2626" : "#000",
      },
      border: `1.5px solid ${error ? "#DC2626" : "#cccccc"}`,
      "&:hover, &:focus": {
        border: `1.5px solid ${error ? "#DC2626" : "#2563EB"}`,
        // Change dropdownIndicator color on control hover
        svg: {
          color: error ? "#DC2626" : "#2563EB",
        },
      },
    }),
    //   menu: (provided, state) => ({}),
    option: (provided, state) => ({
      ...provided,
      textAlign: "left",
      fontSize: "14px",
      fontWeight: "400",
      backgroundColor: state.isSelected
        ? ` ${error ? "#FEE2E2" : "#DBEAFE"}`
        : "#f8fafc",
      color: state.isSelected ? "#000" : "#000",
      "&:hover": {
        backgroundColor: error ? "#FEE2E2" : "#DBEAFE",
        color: "#000",
      },
    }),
  };

  return (
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
  );
};

export default BaseDropdown;
