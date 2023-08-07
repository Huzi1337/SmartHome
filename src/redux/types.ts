type ThermostatModes = "cold" | "eco" | "hot" | "fan";

interface IRoom {
  devices: {
    [key: string]: {
      isOn: boolean;
    };
  };
  thermostat: {
    isOn: boolean;
    mode: ThermostatModes;
    temperature: number;
  };
  cameras: {
    id: number;
    name: string;
  }[];
  light: {
    hue: number;
    lamps: {
      ceiling: boolean;
      corner: boolean;
      side: boolean;
      shelf: boolean;
      wall: boolean;
      table: boolean;
    };
  };
}

type RoomInitialState = {
  [key: string]: IRoom;
};

interface IRoomsPayload {
  room: string;
}
