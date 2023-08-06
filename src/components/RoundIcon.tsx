import "./RoundIcon.scss";

type Props = {
  icon: string;
};

const RoundIcon = ({ icon }: Props) => {
  return (
    <button className="roundIcon__container">
      <img src={icon}></img>
    </button>
  );
};

export default RoundIcon;
