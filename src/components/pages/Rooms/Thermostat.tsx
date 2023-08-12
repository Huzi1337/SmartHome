import { Switch } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setThermostat } from "../../../redux/slices/roomsSlice";
import Card from "../../Card";
import IconButton from "../../IconButton";

import "./Thermostat.scss";
import { useEffect } from "react";

type Props = {
  room: string;
};

const THERMOSTAT_MODES = {
  cold: 14,
  eco: 18,
  hot: 26,
  fan: 10,
};

const Thermostat = ({ room }: Props) => {
  const { thermostat } = useSelector((state: RootState) => state.rooms[room]);

  const dispatch = useDispatch();
  const thermostatModeHandler = (mode: ThermostatModes) => {
    dispatch(
      setThermostat({
        room,
        thermostat: { ...thermostat, mode: mode },
      })
    );
  };

  useEffect(() => {
    let intervalId: number | null = null;

    if (thermostat.isOn) {
      intervalId = setInterval(() => {
        const temperatureDiff =
          THERMOSTAT_MODES[thermostat.mode] - thermostat.temperature;

        if (temperatureDiff !== 0) {
          dispatch(
            setThermostat({
              room,
              thermostat: {
                ...thermostat,
                temperature:
                  thermostat.temperature + (temperatureDiff > 0 ? 1 : -1),
              },
            })
          );
        }
      }, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [thermostat.isOn, thermostat, dispatch, room]);

  const thermostatSwitchHandler = () => {
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
          checked={thermostat.isOn}
          onChange={thermostatSwitchHandler}
        ></Switch>
      </div>
      {(THERMOSTAT_MODES[thermostat.mode] === thermostat.temperature ||
        (THERMOSTAT_MODES[thermostat.mode] != thermostat.temperature &&
          !thermostat.isOn)) && <h1>{`${thermostat.temperature}°C`}</h1>}
      {THERMOSTAT_MODES[thermostat.mode] > thermostat.temperature &&
        thermostat.isOn && (
          <h1 className="increasing">{`${thermostat.temperature}°C`}</h1>
        )}
      {THERMOSTAT_MODES[thermostat.mode] < thermostat.temperature &&
        thermostat.isOn && (
          <h1 className="decreasing">{`${thermostat.temperature}°C`}</h1>
        )}

      <div className="rooms__thermostatOptions">
        {Object.keys(THERMOSTAT_MODES).map((option) => {
          const isActive = option === thermostat.mode;
          return (
            <IconButton
              variant={isActive ? "thermostat Active" : "thermostat"}
              icon={`/icons/thermostat/${option}${
                isActive ? "Active" : ""
              }.svg`}
              onClick={() => thermostatModeHandler(option as ThermostatModes)}
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
