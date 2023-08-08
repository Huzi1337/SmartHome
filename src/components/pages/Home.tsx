import Card from "../Card";
import PageHeader from "../PageHeader";

import "./Home.scss";
import StatList from "./Home/StatList";
import StatRow from "./Home/StatRow";
import { BILLS, STATS, WEATHER } from "../../assets/data";
import DoughnutChart from "../DoughnutChart";

const tempCol2 = ["Electricity", "Activity", "Security"];

const Home = () => {
  return (
    <div className="home__container">
      <PageHeader
        searchOnclick={() => {}}
        notificationOnclick={() => {}}
        settingsOnclick={() => {}}
      >
        <div className="home__header">
          <h2>Welcome back Margot!</h2>
          <h3>Set the mood for this beautiful afternoon.</h3>
        </div>
      </PageHeader>
      <div className="home__col1">
        <StatList
          data={WEATHER}
          title="Sunday"
          titleRight={
            <img className="weather icon" src="/icons/partCloud.svg"></img>
          }
          itemRightClass="bills"
        ></StatList>
        <StatList
          data={BILLS}
          title="Monthly Bills"
          titleRight={<h5 className="bills expand">See all</h5>}
          itemRightClass="bills"
        ></StatList>

        <StatRow data={STATS.app}></StatRow>
        <StatRow data={STATS.home}></StatRow>
      </div>
      <div className="home__col2">
        <DoughnutChart></DoughnutChart>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Home;
