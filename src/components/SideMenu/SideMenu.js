import React, { useEffect } from "react";
import IconLanders from "../../assets/Sidebar/landers.svg";
import IconQuiz from "../../assets/Sidebar/quiz.svg";
import IconCongrats from "../../assets/Sidebar/congrats.svg";
import IconSettings from "../../assets/Sidebar/settings.svg";
import "./sidemenu.scss";
import { HiMenu } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenuItems = [
  {
    icon: IconLanders,
    label: "Landers",
    to: "/landers",
  },
  {
    icon: IconQuiz,
    label: "Quiz",
    to: "/quiz",
  },
  {
    icon: IconCongrats,
    label: "Congrats",
    to: "/congrats",
  },
  {
    icon: IconSettings,
    label: "Settings",
    to: "/settings",
  },
];

const SideMenu = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [active, setActive] = React.useState("landers");
  const location = useLocation();
  const selectedPath = location.pathname.split("/")[1];
  // capitalize first letter
  const selectedPathRenamed =
    location.pathname.split("/")[1].charAt(0).toUpperCase() +
    location.pathname.split("/")[1].slice(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPathRenamed) {
      setActive(selectedPathRenamed);
    }
  }, [selectedPathRenamed]);

  return (
    <aside className={`menu-container ${collapsed ? "collapsed" : "expanded"}`}>
      <div className="menu-heading-container">
        <HiMenu
          className="menu-icon"
          onClick={() => setCollapsed(!collapsed)}
        />
        <h1 className="menu-heading">CMS</h1>
      </div>
      <ul className="menu-items">
        {SideMenuItems.map((item) => (
          <li
            className={`menu-item ${active === item.label ? "active" : ""}`}
            onClick={() => {
              setActive(item.label);
              navigate(item.to);
            }}
          >
            <img
              className="item-icon"
              src={item.icon}
              alt={item.label}
              width={18}
              height={18}
            />
            <span className="item-label">{item.label}</span>
          </li>
        ))}
      </ul>
      <footer className="menu-footer">
        <p className="footer label">© 2023 CMS Adstia</p>
        <p className="footer description">
          BeautIful UI components, designed handcrafted with eye to the detail.
        </p>
      </footer>
    </aside>
  );
};

export default SideMenu;
