import ScrollContainer from "react-indiana-drag-scroll";
import "./Rooms.scss";
import "react-indiana-drag-scroll/dist/style.css";
import PageHeader from "../PageHeader";
import { useState } from "react";
import Device from "../Device";

import Card from "../Card";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { transformLabel } from "../../utils/transformLabel";
import Thermostat from "../Thermostat";
import Camera from "../Camera";

const Rooms = () => {
  const { rooms } = useSelector((state: RootState) => state);

  const [currentRoom, setCurrentRoom] = useState("livingRoom");

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
        {Object.keys(rooms).map((room) => {
          const isActive = currentRoom === room ? "active" : "";
          return (
            <button
              key={room}
              onClick={() => setCurrentRoomHandler(room)}
              className={`rooms__selectionButton ${isActive}`}
            >
              {transformLabel(room)}
            </button>
          );
        })}
      </ScrollContainer>
      <Camera room={currentRoom}></Camera>
      <Thermostat room={currentRoom}></Thermostat>
      <Card className="rooms__devices">
        {Object.keys(rooms[currentRoom].devices).map((device) => (
          <Device name={device} room={currentRoom}></Device>
        ))}
      </Card>
      <Card className="rooms__media"></Card>
    </div>
  );
};

export default Rooms;
