import { Switch } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { deviceSwitch } from "../../../redux/slices/roomsSlice";
import IconButton from "../../IconButton";

import "./Device.scss";

type Props = {
  name: string;

  room: string;
};

const Device = ({ name, room }: Props) => {
  const dispatch = useDispatch();
  const { isOn, img } = useSelector(
    (state: RootState) => state.rooms[room].devices[name]
  );

  const isOnHandler = () => {
    dispatch(deviceSwitch({ room, device: name }));
  };

  return (
    <div className={`device__container ${isOn ? "active" : ""}`}>
      <div className="device__item">
        <h6>{name}</h6>
        <div className={`device__itemPhoto ${img}`}></div>
      </div>
      <div className="device__options">
        <Switch checked={isOn} onChange={isOnHandler}></Switch>
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
