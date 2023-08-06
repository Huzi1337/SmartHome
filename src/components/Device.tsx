import { useState } from "react";
import { Switch } from "@mantine/core";
import RoundIcon from "./RoundIcon";
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
        <RoundIcon
          icon={`/icons/${isOn ? "wifiActive" : "wifi"}.svg`}
        ></RoundIcon>
        <RoundIcon
          icon={`/icons/${isOn ? "cableActive" : "cable"}.svg`}
        ></RoundIcon>
      </div>
    </div>
  );
};

export default Device;
