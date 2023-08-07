import ScrollContainer from "react-indiana-drag-scroll";
import "./Rooms.scss";
import "react-indiana-drag-scroll/dist/style.css";
import PageHeader from "../PageHeader";
import { useState } from "react";
import Device from "../Device";
import IconButton from "../IconButton";
import { Switch } from "@mantine/core";
import Card from "../Card";

const ROOMS = ["bedroom 1", "bedroom 2", "kitchen", "living room", "terrace"];
const THERMOSTAT_OPTIONS = ["cold", "eco", "hot", "fan"];

const Rooms = () => {
  const [currentRoom, setCurrentRoom] = useState("living room");
  const [thermostatOption, setThermostatOption] = useState("cold");

  const setThermostatOptionHandler = (option: string) => {
    setThermostatOption(option);
  };

  const setCurrentRoomHandler = (room: string) => {
    setCurrentRoom(room);
  };
  return (
    <div className="rooms__container">
      <PageHeader
        searchOnclick={() => {}}
        notificationOnclick={() => {}}
        settingsOnclick={() => {}}
      ></PageHeader>
      <ScrollContainer className="rooms__selection">
        {ROOMS.map((room) => {
          const isActive = currentRoom === room ? "active" : "";
          return (
            <button
              key={room}
              onClick={() => setCurrentRoomHandler(room)}
              className={`rooms__selectionButton ${isActive}`}
            >
              {room}
            </button>
          );
        })}
      </ScrollContainer>
      <Card className="rooms__camera"></Card>
      <Card className="rooms__thermostat">
        <div className="rooms__thermostatHeader">
          <h4>Thermostat</h4>
          <Switch></Switch>
        </div>
        <div className="rooms__thermostatOptions">
          {THERMOSTAT_OPTIONS.map((option) => {
            const isActive = option === thermostatOption;
            return (
              <IconButton
                variant={isActive ? "thermostat Active" : "thermostat"}
                icon={`/icons/thermostat/${option}${
                  isActive ? "Active" : ""
                }.svg`}
                onClick={() => setThermostatOptionHandler(option)}
                text={option}
                key={option}
              ></IconButton>
            );
          })}
        </div>
      </Card>
      <Card className="rooms__devices">
        <Device title="Speaker" img="speaker"></Device>
        <Device title="Speaker" img="speaker"></Device>
        <Device title="Speaker" img="speaker"></Device>
        <Device title="Speaker" img="speaker"></Device>
      </Card>
      <Card className="rooms__media"></Card>
    </div>
  );
};

export default Rooms;
