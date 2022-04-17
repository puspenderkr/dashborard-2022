import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm2 from "../../components/widgetSm2/widgetSm2";
import WidgetSm3 from "../../components/widgetSm3/widgetSm3";
import WidgetSm4 from "../../components/widgetSm4/WidgetSm4";
import ProgressBar from "../../components/progressBar/ProgressBar";
import WidgetLg2 from "../../components/widgetlg2/WidgetLg2";

export default function Home() {
  return (
    <div className="home">
      <div className="homeWidgets">
        <WidgetLg2 />
        <WidgetSm4 />
      </div>
      <FeaturedInfo />
      <div className="homeWidgets">
        <ProgressBar />
        <Chart
          data={userData}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
      </div>
      <div className="homeWidgets">
        <WidgetLg />
        <WidgetSm />
      </div>
      <div className="homeWidgets">
        <WidgetSm3 />
        <WidgetSm2 />
        <WidgetSm4 />
      </div>
    </div>
  );
}
