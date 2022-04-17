import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Total Active User</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoneyRate">
            <button className="featuredButton">
              <ArrowDownward className="featuredIcon negative" />
            </button>
            -11.4%
          </span>
          <span className="featuredMoneyRate">
            <BarChartRoundedIcon className="featuredIcon2 " />
          </span>
        </div>
        <span className="featuredMoney">2,415</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Download</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoneyRate">
            <button className="featuredButton">
              <ArrowDownward className="featuredIcon negative" />
            </button>
            -11.4%
          </span>
          <span className="featuredMoneyRate">
            <BarChartRoundedIcon className="featuredIcon2 " />
          </span>
        </div>
        <span className="featuredMoney">2,415</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Total Installed</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoneyRate">
            <button className="featuredButton">
              <ArrowUpward className="featuredIcon" />
            </button>
            +11.4%
          </span>
          <span className="featuredMoneyRate">
            <BarChartRoundedIcon className="featuredIcon2 " />
          </span>
        </div>
        <span className="featuredMoney">2,415</span>
      </div>
    </div>
  );
}
