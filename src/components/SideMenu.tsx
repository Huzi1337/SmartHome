import dayjs from "dayjs";
import "./SideMenu.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const SECTIONS = ["home", "rooms", "users", "devices", "security"];

const SideMenu = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={showMenuHandler}
        className={`sideMenu__blinder ${showMenu ? "show" : ""}`}
      ></div>
      <div className={`sideMenu__container ${showMenu ? "show" : ""}`}>
        <button onClick={showMenuHandler} className="sideMenu__toggle"></button>
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
            return section === "home" || section === "rooms" ? (
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
            ) : (
              <a className={`sideMenu__navLink inactive`} key={section}>
                <div
                  key={section}
                  className={`sideMenu__navigation__icon ${section} ${isActive}`}
                ></div>
                <h3>{section}</h3>
              </a>
            );
          })}
        </nav>
        <div className="sideMenu__footer">
          {/* <div className="sideMenu__footerRow">
            <h4>Dark Mode</h4>
            <Switch aria-label="Dark Mode"></Switch>
          </div> */}
          <div className="sideMenu__footerRow">
            <div className="sideMenu__navigation__icon logout"></div>
            <h3>Signout</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
