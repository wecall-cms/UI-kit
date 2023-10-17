export const reactSelectCustomStyles = {
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
    dislay: "flex",
    flexWrap: "nowrap",
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
