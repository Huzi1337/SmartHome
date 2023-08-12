import { Slider, Switch } from "@mantine/core";
import Card from "../../Card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Lamps, lampSwitch, setHue } from "../../../redux/slices/roomsSlice";
import IconButton from "../../IconButton";
import "./Media.scss";
import MusicPlayer from "./MusicPlayer";
import { useState } from "react";

type Props = {
  room: string;
};

const Media = ({ room }: Props) => {
  const [selectedLamp, setSelectedLamp] = useState<Lamps>("ceiling");
  const lamps = useSelector((state: RootState) => state.rooms[room].light);

  const dispatch = useDispatch();
  const setHueHandler = (value: number) => {
    dispatch(setHue({ room, hue: value, lamp: selectedLamp }));
  };
  const lampSwitchHandler = () =>
    dispatch(lampSwitch({ room, lamp: selectedLamp }));
  const setSelectedLampHandler = (lamp: Lamps) => setSelectedLamp(lamp);
  return (
    <Card className="rooms__media">
      <div
        style={{
          filter: `opacity(0.7) drop-shadow(0 0 hsl(${
            lamps[selectedLamp].hue
          }, 75%, ${lamps[selectedLamp].isOn ? "50%" : "0%"})) ${
            lamps[selectedLamp].isOn ? "" : "brightness(0.5)"
          }`,
        }}
        className={`media__hueShowCase ${
          lamps[selectedLamp].isOn ? "" : "off"
        }`}
      ></div>
      <Slider
        min={0}
        max={360}
        value={lamps[selectedLamp].hue}
        onChange={(value) => setHueHandler(value)}
      ></Slider>
      <Switch
        checked={lamps[selectedLamp].isOn}
        onChange={lampSwitchHandler}
      ></Switch>
      <div className="media__lamps">
        {Object.keys(lamps).map((lamp) => (
          <IconButton
            key={lamp}
            icon={`/icons/lamps/${lamp}.svg`}
            text={lamp}
            variant={selectedLamp === lamp ? "lamp active" : "lamp"}
            textPos="up"
            onClick={() => setSelectedLampHandler(lamp as Lamps)}
          ></IconButton>
        ))}
      </div>
      <MusicPlayer></MusicPlayer>
    </Card>
  );
};

export default Media;
