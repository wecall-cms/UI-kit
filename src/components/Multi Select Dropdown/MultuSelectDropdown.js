import React, { useEffect, useState } from "react";
// import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import "./MultiSelectDropdown.scss";
import { reactSelectCustomStyles } from "../../Constant/SelectStyles";

const CustomValueContainer = ({ children, ...props }) => {
  const selectedCount = props.getValue().length;

  return (
    <div
      style={{
        display: "flex",
        paddingLeft: "10px",
        width: "100%",
      }}
      onClick={() => {
        props.selectProps.menuIsOpen
          ? props.selectProps.onMenuClose()
          : props.selectProps.onMenuOpen();
      }}
      {...props}
    >
      {selectedCount} Selected
    </div>
  );
};

const CustomOption = ({ innerProps, label, isSelected, onSelectOption }) => (
  <div
    {...innerProps}
    style={{
      textAlign: "left",
    }}
  >
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        paddingLeft: "10px",
      }}
    >
      <input
        style={{
          width: "14px",
          height: "14px",
        }}
        type="checkbox"
        checked={isSelected}
        onChange={(e) => {
          e.stopPropagation();
          onSelectOption(label);
        }}
      />
      {label}
    </label>
  </div>
);

const MultiSelectDropDown = ({ size, options }) => {
  const [selected, setSelected] = useState([]);

  const handleOptionSelect = (optionLabel) => {
    setSelected((prevSelected) => {
      const isOptionSelected = prevSelected.includes(optionLabel);
      const newSelected = isOptionSelected
        ? prevSelected.filter((option) => option !== optionLabel)
        : [...prevSelected];
      return newSelected;
    });
  };

  const customOptions = options.map((option) => ({
    label: option.label,
    value: option.value,
    isSelected: selected.includes(option.value),
  }));

  return (
    <div>
      <Select
        isMulti
        isClearable={false}
        hideSelectedOptions={false}
        options={customOptions}
        value={selected}
        onChange={setSelected}
        className={`cms__dropdown ${size}`}
        styles={reactSelectCustomStyles}
        components={{
          IndicatorSeparator: () => null,
          ValueContainer: (props) => <CustomValueContainer {...props} />,
          Option: ({ innerProps, label, isSelected }) => (
            <CustomOption
              innerProps={innerProps}
              label={label}
              isSelected={isSelected}
              onSelectOption={handleOptionSelect}
            />
          ),
        }}
      />
    </div>
  );
};

export default MultiSelectDropDown;
