import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: RoomInitialState = {
  bedroom1: {
    devices: {
      speaker: { isOn: true, img: "speaker" },
      humidifier: { isOn: false, img: "humidifier" },
      roomba: { isOn: false, img: "roomba" },
      alexa: { isOn: false, img: "alexa" },
    },
    cameras: [
      { id: 0, name: "Bedroom 1 cam 1", img: "/photos/cameras/bedroom1/1.png" },
    ],
    light: {
      ceiling: { isOn: false, hue: 100 },
      corners: { isOn: false, hue: 100 },
      shelf: { isOn: false, hue: 100 },
      side: { isOn: false, hue: 100 },
      table: { isOn: false, hue: 100 },
      wall: { isOn: false, hue: 100 },
    },
    thermostat: {
      isOn: true,
      mode: "cold",
      temperature: 22,
    },
  },
  bedroom2: {
    devices: {
      speaker: { isOn: true, img: "speaker" },
      humidifier: { isOn: false, img: "humidifier" },
      roomba: { isOn: false, img: "roomba" },
      alexa: { isOn: false, img: "alexa" },
    },
    cameras: [
      { id: 0, name: "Bedroom 2 cam 1", img: "/photos/cameras/bedroom2/1.jpg" },
    ],
    light: {
      ceiling: { isOn: false, hue: 100 },
      corners: { isOn: false, hue: 100 },
      shelf: { isOn: false, hue: 100 },
      side: { isOn: false, hue: 100 },
      table: { isOn: false, hue: 100 },
      wall: { isOn: false, hue: 100 },
    },
    thermostat: {
      isOn: true,
      mode: "cold",
      temperature: 22,
    },
  },
  kitchen: {
    devices: {
      speaker: { isOn: true, img: "speaker" },
      humidifier: { isOn: false, img: "humidifier" },
      roomba: { isOn: false, img: "roomba" },
      alexa: { isOn: false, img: "alexa" },
    },
    cameras: [
      { id: 0, name: "Kitchen cam 1", img: "/photos/cameras/kitchen/1.png" },
    ],
    light: {
      ceiling: { isOn: false, hue: 100 },
      corners: { isOn: false, hue: 100 },
      shelf: { isOn: false, hue: 100 },
      side: { isOn: false, hue: 100 },
      table: { isOn: false, hue: 100 },
      wall: { isOn: false, hue: 100 },
    },
    thermostat: {
      isOn: true,
      mode: "cold",
      temperature: 22,
    },
  },
  livingRoom: {
    devices: {
      speaker: { isOn: true, img: "speaker" },
      humidifier: { isOn: false, img: "humidifier" },
      roomba: { isOn: false, img: "roomba" },
      alexa: { isOn: false, img: "alexa" },
    },
    cameras: [
      {
        id: 0,
        name: "Living Room cam 1",
        img: "/photos/cameras/livingRoom/1.png",
      },
    ],
    light: {
      ceiling: { isOn: false, hue: 100 },
      corners: { isOn: false, hue: 100 },
      shelf: { isOn: false, hue: 100 },
      side: { isOn: false, hue: 100 },
      table: { isOn: false, hue: 100 },
      wall: { isOn: false, hue: 100 },
    },
    thermostat: {
      isOn: true,
      mode: "cold",
      temperature: 22,
    },
  },
  terrace: {
    devices: {
      speaker: { isOn: true, img: "speaker" },
      humidifier: { isOn: false, img: "humidifier" },
      roomba: { isOn: false, img: "roomba" },
      alexa: { isOn: false, img: "alexa" },
    },
    cameras: [
      { id: 0, name: "Terrace cam 1", img: "/photos/cameras/terrace/1.jpg" },
    ],
    light: {
      ceiling: { isOn: false, hue: 100 },
      corners: { isOn: false, hue: 100 },
      shelf: { isOn: false, hue: 100 },
      side: { isOn: false, hue: 100 },
      table: { isOn: false, hue: 100 },
      wall: { isOn: false, hue: 100 },
    },
    thermostat: {
      isOn: true,
      mode: "cold",
      temperature: 22,
    },
  },
};

export type Lamps = keyof typeof INITIAL_STATE.bedroom1.light;

interface IDeviceSwitchPayload extends IRoomsPayload {
  device: string;
}

interface ILampSwitchPayload extends IRoomsPayload {
  lamp: Lamps;
}

interface ISetHuePayload extends IRoomsPayload {
  lamp: Lamps;

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
      state[room].light[lamp].isOn = !state[room].light[lamp].isOn;
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
      { payload: { room, hue, lamp } }: PayloadAction<ISetHuePayload>
    ) => {
      state[room].light[lamp].hue = hue;
      return state;
    },
  },
});

export const { deviceSwitch, lampSwitch, setThermostat, setHue } =
  roomsSlice.actions;
export default roomsSlice.reducer;
