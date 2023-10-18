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
      onBlur={() => {
        props.selectProps.onMenuClose();
      }}
      {...props}
    >
      {selectedCount > 0 ? selectedCount + " Selected" : "Select"}
    </div>
  );
};

const CustomOption = ({
  innerProps,
  label,
  isSelected,
  onSelectOption,
  ...props
}) => {
  const isDisabled = props?.isDisabled;
  console.log("propsCustomOption", props);

  return (
    <div
      className={`custom-option-menu ${isDisabled ? "is-disabled" : ""}`}
      {...innerProps}
      onBlur={() => {
        console.log("onBlur");
        props.selectProps.onMenuClose();
      }}
    >
      <label className="custom-option-menu-label">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => {
            if (!props.isDisabled) {
              e.stopPropagation();
              onSelectOption(label);
            }
          }}
        />
        {label}
      </label>
    </div>
  );
};

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
    isDisabled: option.isDisabled,
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
          Option: ({ innerProps, label, isSelected, data, ...props }) => (
            <CustomOption
              innerProps={innerProps}
              label={label}
              isSelected={isSelected}
              onSelectOption={handleOptionSelect}
              data={props.data}
              {...props}
            />
          ),
        }}
      />
    </div>
  );
};

export default MultiSelectDropDown;
