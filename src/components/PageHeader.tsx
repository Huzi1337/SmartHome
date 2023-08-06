import "./PageHeader.scss";

type Props = {
  children?: React.ReactNode;
  settingsOnclick: () => void;
  searchOnclick: () => void;
  notificationOnclick: () => void;
};

const Rooms = ({ children }: Props) => {
  return (
    <div className="pageHeader__container">
      {children}
      <button className="pageHeader__button search"></button>
      <button className="pageHeader__button settings"></button>
      <button className="pageHeader__button notifications"></button>
    </div>
  );
};

export default Rooms;
