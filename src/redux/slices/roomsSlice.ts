import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: RoomInitialState = {
  bedroom1: {
    devices: {
      speaker: { isOn: true },
      humidifier: { isOn: false },
      roomba: { isOn: false },
      alexa: { isOn: false },
    },
    cameras: [{ id: 0, name: "Bedroom 1 cam 1" }],
    light: {
      hue: 100,
      lamps: {
        ceiling: false,
        corner: false,
        shelf: false,
        side: false,
        table: false,
        wall: false,
      },
    },
    thermostat: {
      isOn: true,
      mode: "cold",
      temperature: 22,
    },
  },
  bedroom2: {
    devices: {
      speaker: { isOn: true },
      humidifier: { isOn: false },
      roomba: { isOn: false },
      alexa: { isOn: false },
    },
    cameras: [{ id: 0, name: "Bedroom 2 cam 1" }],
    light: {
      hue: 100,
      lamps: {
        ceiling: false,
        corner: false,
        shelf: false,
        side: false,
        table: false,
        wall: false,
      },
    },
    thermostat: {
      isOn: true,
      mode: "cold",
      temperature: 22,
    },
  },
  kitchen: {
    devices: {
      speaker: { isOn: true },
      humidifier: { isOn: false },
      roomba: { isOn: false },
      alexa: { isOn: false },
    },
    cameras: [{ id: 0, name: "Kitchen cam 1" }],
    light: {
      hue: 100,
      lamps: {
        ceiling: false,
        corner: false,
        shelf: false,
        side: false,
        table: false,
        wall: false,
      },
    },
    thermostat: {
      isOn: true,
      mode: "cold",
      temperature: 22,
    },
  },
  livingRoom: {
    devices: {
      speaker: { isOn: true },
      humidifier: { isOn: false },
      roomba: { isOn: false },
      alexa: { isOn: false },
    },
    cameras: [{ id: 0, name: "Living Room cam 1" }],
    light: {
      hue: 100,
      lamps: {
        ceiling: false,
        corner: false,
        shelf: false,
        side: false,
        table: false,
        wall: false,
      },
    },
    thermostat: {
      isOn: true,
      mode: "cold",
      temperature: 22,
    },
  },
  terrace: {
    devices: {
      speaker: { isOn: true },
      humidifier: { isOn: false },
      roomba: { isOn: false },
      alexa: { isOn: false },
    },
    cameras: [{ id: 0, name: "Terrace cam 1" }],
    light: {
      hue: 100,
      lamps: {
        ceiling: false,
        corner: false,
        shelf: false,
        side: false,
        table: false,
        wall: false,
      },
    },
    thermostat: {
      isOn: true,
      mode: "cold",
      temperature: 22,
    },
  },
};

interface IDeviceSwitchPayload extends IRoomsPayload {
  device: string;
}

interface ILampSwitchPayload extends IRoomsPayload {
  lamp: keyof typeof INITIAL_STATE.bedroom1.light.lamps;
}

interface ISetHuePayload extends IRoomsPayload {
  hue: number;
}

interface ISetThermostat extends IRoomsPayload {
  thermostat: {
    isOn: boolean;
    mode: ThermostatModes;
    temperature: number;
  };
}

const roomsSlice = createSlice({
  name: "rooms",
  initialState: INITIAL_STATE,
  reducers: {
    deviceSwitch: (
      state,
      { payload: { device, room } }: PayloadAction<IDeviceSwitchPayload>
    ) => {
      state[room].devices[device].isOn = !state[room].devices[device].isOn;
      return state;
    },
    lampSwitch: (
      state,
      { payload: { lamp, room } }: PayloadAction<ILampSwitchPayload>
    ) => {
      state[room].light.lamps[lamp] = !state[room].light.lamps[lamp];
      return state;
    },
    setThermostat: (
      state,
      { payload: { room, thermostat } }: PayloadAction<ISetThermostat>
    ) => {
      state[room].thermostat = { ...state[room].thermostat, ...thermostat };
      return state;
    },
    setHue: (
      state,
      { payload: { room, hue } }: PayloadAction<ISetHuePayload>
    ) => {
      state[room].light.hue = hue;
      return state;
    },
  },
});

export const { deviceSwitch, lampSwitch, setThermostat, setHue } =
  roomsSlice.actions;
export default roomsSlice.reducer;
