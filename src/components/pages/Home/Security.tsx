import { Switch } from "@mantine/core";
import Card from "../../Card";

import "./Security.scss";
import { transformLabel } from "../../../utils/transformLabel";

const floorDoors = {
  floor1: ["Main door", "Back door"],
  floor2: ["Main door", "Back door"],
};

const Security = () => {
  return (
    <Card className="security">
      <h3>Security</h3>

      {Object.entries(floorDoors).map((floor) => (
        <div className="security__floorContainer">
          <h4 className="floorName">{transformLabel(floor[0])}</h4>
          {floor[1].map((door) => (
            <div className="security__switchContainer">
              <h4>{door}</h4>
              <Switch></Switch>
            </div>
          ))}
        </div>
      ))}
    </Card>
  );
};

export default Security;
