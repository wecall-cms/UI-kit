import React, { useState } from "react";
import "./nav.scss";
import { BsMoon } from "react-icons/bs";
import Avatar from "../Avatar/Avatar";
import Select from "react-select";

const users = [
  {
    label: "Nikhil",
    value: "nikhil",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Nala",
  },
  {
    label: "Zero",
    value: "zero",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Precious",
  },
  {
    label: "Luffy",
    value: "luffy",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Angel",
  },
];

const reactSelectCustomStyles = {
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "#000", // Change this to the desired color
  }),
  control: (provided, state) => ({
    ...provided,
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
    width: "6.5rem",
    "&:hover": {
      border: "none",
    },
  }),
  menu: (provided, state) => ({
    ...provided,
    right: "30px", // Adjust the left position as needed
    minWidth: "10rem",
  }),
};

const Nav = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-user">
        <h1 className="user-name">Hi {selectedUser.label}</h1>
      </div>
      <div className="nav-user-meta">
        <BsMoon className="icon-theme" />
        <div className="user-switch">
          <div className="user-switch-avatar">
            <img
              src={selectedUser.avatar}
              alt="avatar"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <Select
            className="select-user "
            width={200}
            options={users}
            value={selectedUser}
            onChange={(e) => setSelectedUser(e)}
            components={{
              IndicatorSeparator: () => null,
            }}
            styles={reactSelectCustomStyles}
            isSearchable={false}
            menuIsOpen={isMenuOpen}
            onMenuOpen={handleMenuOpen}
            onMenuClose={handleMenuClose}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
