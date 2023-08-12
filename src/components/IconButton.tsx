import "./IconButton.scss";

type Props = {
  icon: string;
  text?: string | null;
  variant:
    | "device"
    | "thermostat"
    | "thermostat Active"
    | "statList"
    | "lamp"
    | "lamp active"
    | "";
  textPos?: "down" | "up";
  onClick?: () => void;
};

const IconButton = ({
  icon,
  text = null,
  textPos = "down",
  variant = "",
  onClick = () => {
    console.log("Undefined onclick");
  },
}: Props) => {
  return (
    <button onClick={onClick} className={`iconButton__container ${variant}`}>
      {text != null && textPos === "up" && <h6>{text}</h6>}
      <img src={icon}></img>
      {text != null && textPos === "down" && <h6>{text}</h6>}
    </button>
  );
};

export default IconButton;
