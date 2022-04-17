import "./widgetSm4.css";
import { CircularProgressbar } from "react-circular-progressbar";
import EmailIcon from "@mui/icons-material/Email";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function WidgetSm4() {
  return (
    <div className="widgetSm4">
      <span className="widgetSm4Title">Banner small </span>
      <div className="widgetSm4List">
        <div className="progressBarChart">
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={5}
            style={{ trailColor: "#b4f7b4" }}
          />
        </div>
        <div className="widgetSm4cont">
          <div style={{ fontSize: "20px", fontStyle: "bold" }}>35,256</div>
          <div>Conversion</div>
        </div>
        <div className="widgetSm4Icon">
          <EmailIcon
            style={{ fontSize: "50px", color: "rgb(214, 214, 214)" }}
          />
        </div>
      </div>
      <div className="widgetSm4List">
        <div className="progressBarChart">
          <CircularProgressbar
            value={70}
            text={"70%"}
            strokeWidth={5}
            style={{ trailColor: "#b4f7b4" }}
          />
        </div>
        <div className="widgetSm4cont">
          <div style={{ fontSize: "20px", fontStyle: "bold" }}>35,256</div>
          <div>Conversion</div>
        </div>
        <div className="widgetSm4Icon">
          <PersonOutlineIcon
            style={{ fontSize: "50px", color: "rgb(214, 214, 214)" }}
          />
        </div>
      </div>
    </div>
  );
}
