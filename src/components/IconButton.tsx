import "./IconButton.scss";

type Props = {
  icon: string;
  text?: string | null;
  variant: "device" | "thermostat" | "thermostat Active" | "";
  onClick?: () => void;
};

const IconButton = ({
  icon,
  text = null,
  variant = "",
  onClick = () => {
    console.log("Undefined onclick");
  },
}: Props) => {
  return (
    <button onClick={onClick} className={`iconButton__container ${variant}`}>
      <img src={icon}></img>
      {text != null && <h6>{text}</h6>}
    </button>
  );
};

export default IconButton;
