import dayjs from "dayjs";
import "./SideMenu.scss";
import { NavLink, useLocation } from "react-router-dom";
import { Switch } from "@mantine/core";

const SECTIONS = ["home", "rooms", "users", "devices", "security"];

const SideMenu = () => {
  const { pathname } = useLocation();
  return (
    <div className="sideMenu__container">
      <div className="sideMenu__headerContainer">
        <h1>Smart Home</h1>
        <img
          className="sideMenu__profilePic"
          src="/photos/profilePic.png"
        ></img>
        <h4>{dayjs().format("DD MMM YYYY")}</h4>
      </div>

      <nav className="sideMenu__navigation">
        {SECTIONS.map((section) => {
          const isActive = pathname === `/${section}` ? "active" : "";
          return (
            <NavLink
              className={`sideMenu__navLink ${isActive}`}
              key={section}
              to={`/${section}`}
            >
              <div
                key={section}
                className={`sideMenu__navigation__icon ${section} ${isActive}`}
              ></div>
              <h3>{section}</h3>
            </NavLink>
          );
        })}
      </nav>
      <div className="sideMenu__footer">
        <div className="sideMenu__footerRow">
          <h4>Dark Mode</h4>
          <Switch aria-label="Dark Mode"></Switch>
        </div>
        <div className="sideMenu__footerRow">
          <div className="sideMenu__navigation__icon logout"></div>
          <h3>Signout</h3>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
