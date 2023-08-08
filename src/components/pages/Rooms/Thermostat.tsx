import { Switch } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setThermostat } from "../../../redux/slices/roomsSlice";
import Card from "../../Card";
import IconButton from "../../IconButton";

import "./Thermostat.scss";

type Props = {
  room: string;
};

const THERMOSTAT_OPTIONS: ThermostatModes[] = ["cold", "eco", "hot", "fan"];

const Thermostat = ({ room }: Props) => {
  const currentRoom = useSelector((state: RootState) => state.rooms[room]);
  const dispatch = useDispatch();
  const thermostatModeHandler = (mode: ThermostatModes) => {
    const thermostat = currentRoom.thermostat;
    dispatch(
      setThermostat({
        room,
        thermostat: { ...thermostat, mode: mode },
      })
    );
  };

  const thermostatSwitchHandler = () => {
    const thermostat = currentRoom.thermostat;
    dispatch(
      setThermostat({
        room,
        thermostat: { ...thermostat, isOn: !thermostat.isOn },
      })
    );
  };

  return (
    <Card className="rooms__thermostat">
      <div className="rooms__thermostatHeader">
        <h4>Thermostat</h4>
        <Switch
          checked={currentRoom.thermostat.isOn}
          onChange={thermostatSwitchHandler}
        ></Switch>
      </div>
      <h1>{`${currentRoom.thermostat.temperature}°C`}</h1>

      <div className="rooms__thermostatOptions">
        {THERMOSTAT_OPTIONS.map((option) => {
          const isActive = option === currentRoom.thermostat.mode;
          return (
            <IconButton
              variant={isActive ? "thermostat Active" : "thermostat"}
              icon={`/icons/thermostat/${option}${
                isActive ? "Active" : ""
              }.svg`}
              onClick={() => thermostatModeHandler(option)}
              text={option}
              key={option}
            ></IconButton>
          );
        })}
      </div>
    </Card>
  );
};

export default Thermostat;
