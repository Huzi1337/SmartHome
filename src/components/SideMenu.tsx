import dayjs from "dayjs";
import "./SideMenu.scss";

const SECTIONS = ["home", "rooms", "users", "devices", "security"];

const SideMenu = () => {
  return (
    <>
      <div className="sideMenu__container">
        <h1>Smart Home</h1>
        <img src="/photos/profilePic.png"></img>
        <h4>{dayjs().format("DD MMM YYYY")}</h4>
      </div>
      <nav></nav>
    </>
  );
};

export default SideMenu;
