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
    ceiling: { isOn: boolean; hue: number };
    corners: { isOn: boolean; hue: number };
    side: { isOn: boolean; hue: number };
    shelf: { isOn: boolean; hue: number };
    wall: { isOn: boolean; hue: number };
    table: { isOn: boolean; hue: number };
  };
}

type RoomInitialState = {
  [key: string]: IRoom;
};

interface IRoomsPayload {
  room: string;
}
