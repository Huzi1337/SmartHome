import { Slider } from "@mantine/core";
import Card from "../../Card";

import "./Media.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setHue } from "../../../redux/slices/roomsSlice";
import IconButton from "../../IconButton";

type Props = {
  room: string;
};

const Media = ({ room }: Props) => {
  const { hue, lamps } = useSelector(
    (state: RootState) => state.rooms[room].light
  );
  const dispatch = useDispatch();
  const setHueHandler = (value: number) => {
    dispatch(setHue({ room, hue: value }));
  };
  return (
    <Card className="rooms__media">
      <div
        style={{
          filter: `opacity(0.7) drop-shadow(0 0 hsl(${hue}, 75%, 50%))`,
        }}
        className="media__hueShowCase"
      ></div>
      <Slider
        min={0}
        max={360}
        value={hue}
        onChange={(value) => setHueHandler(value)}
      ></Slider>
      <div className="media__lamps">
        {Object.keys(lamps).map((lamp) => (
          <IconButton
            key={lamp}
            icon={`/icons/lamps/${lamp}.svg`}
            text={lamp}
            variant={"lamp"}
            textPos="up"
          ></IconButton>
        ))}
      </div>
      <div className="media__player">
        <h4>In Da Club</h4>
        <h6>By 50 Cent</h6>
        <Slider label={null}></Slider>
      </div>
    </Card>
  );
};

export default Media;
