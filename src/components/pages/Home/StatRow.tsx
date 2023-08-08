import Card from "../../Card";

export type StatRowData = { [key: string]: string | number };

type Props = {
  data: StatRowData;
};

import "./StatRow.scss";
const StatRow = ({ data }: Props) => {
  return (
    <Card className="statRow__container">
      {Object.entries(data).map((item) => (
        <div className="statRow__entry">
          <h5>{item[0]}</h5>
          <h2>{item[1]}</h2>
        </div>
      ))}
    </Card>
  );
};

export default StatRow;
