type ThermostatModes = "cold" | "eco" | "hot" | "fan";

interface IRoom {
  devices: {
    [key: string]: {
      isOn: boolean;
      img: string;
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
    img: string;
  }[];
  light: {
    hue: number;
    lamps: {
      ceiling: boolean;
      corners: boolean;
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
