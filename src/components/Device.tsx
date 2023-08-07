import { useState } from "react";
import { Switch } from "@mantine/core";
import IconButton from "./IconButton";
import "./Device.scss";

type Props = {
  title: string;
  img: string;
};

const Device = ({ title, img }: Props) => {
  const [isOn, setIsOn] = useState(false);

  const setIsOnHandler = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className={`device__container ${isOn ? "active" : ""}`}>
      <div className="device__item">
        <h6>{title}</h6>
        <div className={`device__itemPhoto ${img}`}></div>
      </div>
      <div className="device__options">
        <Switch checked={isOn} onChange={setIsOnHandler}></Switch>
        <IconButton
          variant="device"
          icon={`/icons/${isOn ? "wifiActive" : "wifi"}.svg`}
        ></IconButton>
        <IconButton
          variant="device"
          icon={`/icons/${isOn ? "cableActive" : "cable"}.svg`}
        ></IconButton>
      </div>
    </div>
  );
};

export default Device;
