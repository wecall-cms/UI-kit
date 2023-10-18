export const reactSelectCustomStyles = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#334155",
    "&:hover": {
      color: "#2563EB",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    textAlign: "left",
    display: "flex",
    flexWrap: "nowrap",
    "&:hover, &:focus": {
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
    backgroundColor: state.isSelected ? "#DBEAFE" : "#f8fafc",
    color: state.isDisabled ? "#adb4bd" : "#334155",
    "&:hover": {
      backgroundColor: "#DBEAFE",
      color: "#334155",
    },
  }),
};
