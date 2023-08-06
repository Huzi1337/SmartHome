import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";

const RootLayout = () => {
  return (
    <>
      <SideMenu></SideMenu>
      <Outlet></Outlet>
    </>
  );
};

export default RootLayout;
