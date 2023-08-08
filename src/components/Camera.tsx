import { useSelector } from "react-redux";
import Card from "./Card";
import Dropdown from "./Dropdown";
import { RootState } from "../redux/store";

import "./Camera.scss";

type Props = {
  room: string;
};

const Camera = ({ room }: Props) => {
  const cameras = useSelector((state: RootState) => state.rooms[room].cameras);
  return (
    <Card className="rooms__camera">
      <div
        className="camera"
        style={{
          backgroundImage: `url(${cameras[0].img}/1.png)`,
        }}
      >
        <Dropdown data={["FHD", "HD"]}></Dropdown>
        <div className="camera__live">
          <div className="camera__liveIcon"></div>
          <h3>LIVE</h3>
        </div>
        <div className="camera__label">
          <h3>{cameras[0].name}</h3>
        </div>
      </div>
    </Card>
  );
};

export default Camera;
