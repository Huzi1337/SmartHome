import ScrollContainer from "react-indiana-drag-scroll";
import "./Rooms.scss";
import "react-indiana-drag-scroll/dist/style.css";
import PageHeader from "../PageHeader";
import { useState } from "react";
import Device from "../Device";

const rooms = ["bedroom 1", "bedroom 2", "kitchen", "living room", "terrace"];

const Rooms = () => {
  const [currentRoom, setCurrentRoom] = useState("living room");

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
        {rooms.map((room) => {
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
      <div className="rooms__camera"></div>
      <div className="rooms__thermostat"></div>
      <div className="rooms__devices">
        <Device title="Speaker" img="speaker"></Device>
        <Device title="Speaker" img="speaker"></Device>
        <Device title="Speaker" img="speaker"></Device>
        <Device title="Speaker" img="speaker"></Device>
      </div>
      <div className="rooms__media"></div>
    </div>
  );
};

export default Rooms;
