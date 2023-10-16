import React from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import "./applayout.scss";

const AppLayout = ({ children }) => {
  return (
    <div className="App">
      {/* Navigation */}
      <div style={{ height: "60px", backgroundColor: "#f5f5f5" }}></div>
      <div className="main-layout-container">
        <SideMenu />
        {/* main will be auto adjustable according to remaining width  */}
        <main className="main-container">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
