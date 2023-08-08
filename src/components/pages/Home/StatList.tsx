import Card from "../../Card";
import IconButton from "../../IconButton";

import "./StatList.scss";

export type ListStatItem = {
  title: string;
  subtitle: string;
  rightSide: string;
  img: string;
};

type Props = {
  data: ListStatItem[];
  title: string;
  titleRight: React.ReactNode;
  itemRightClass: string;
};

const StatList = ({ data, title, titleRight, itemRightClass }: Props) => {
  return (
    <Card className="home__statList">
      <h3>{title}</h3>
      {titleRight}
      <hr></hr>
      <div className="home__statListContent">
        {data.map(({ title, img, rightSide, subtitle }) => (
          <div key={title} className="home__statListItem">
            <IconButton variant="statList" icon={img}></IconButton>
            <div>
              <h4>{title}</h4>
              <h6>{subtitle}</h6>
            </div>
            <h5 className={itemRightClass}>{rightSide}</h5>
          </div>
        ))}
      </div>
    </Card>
  );
};
export default StatList;
