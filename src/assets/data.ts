import dayjs from "dayjs";
import { ListStatItem } from "../components/pages/Home/StatList";

export const WEATHER: ListStatItem[] = [
  {
    title: "Wind Speed",
    subtitle: "18 km/h",
    rightSide: "+2 km/hr",
    img: "/icons/thermostat/fan.svg",
  },
  {
    title: "Pressure",
    subtitle: "720 hpa",
    rightSide: "+24 hpa",
    img: "/icons/pressure.svg",
  },
  {
    title: "Rain Chance",
    subtitle: "32%",
    rightSide: "-7%",
    img: "/icons/rain.svg",
  },
];

export const BILLS: ListStatItem[] = [
  {
    title: "Electricity",
    subtitle: "Due today",
    rightSide: "Pay Now",
    img: "/icons/electricity.svg",
  },
  {
    title: "Water",
    subtitle: "Due tomorrow",
    rightSide: "Pay Now",
    img: "/icons/water.svg",
  },
  {
    title: "Wifi",
    subtitle: `Due on ${dayjs().add(6, "day").format("D MMM")}`,
    rightSide: "Pay Now",
    img: "/icons/wifi.svg",
  },
];

export const STATS = {
  app: { devices: "12", cameras: "06", users: "03" },
  home: { temp: "18°C", humidity: "76%", wifi: "47Mb/s" },
};
