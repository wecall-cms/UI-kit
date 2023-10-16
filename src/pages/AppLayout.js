import React from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import "./applayout.scss";
import Nav from "../components/Navigation/Nav";

const AppLayout = ({ children }) => {
  return (
    <div className="App">
      <Nav />

      <div className="main-layout-container">
        <SideMenu />
        {/* main will be auto adjustable according to remaining width  */}
        <main className="main-container">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
