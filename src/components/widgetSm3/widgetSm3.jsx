import "./widgetSm3.css";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

export default function WidgetSm2() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Top Installed Countries</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://flagcdn.com/16x12/za.png"
            srcset="https://flagcdn.com/32x24/za.png 2x,
    https://flagcdn.com/48x36/za.png 3x"
            width="16"
            height="12"
            alt="South Africa"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">South Africa</span>
          </div>
          <div>
            <AppleIcon
              style={{ color: "grey", fontSize: "13px", margin: "0 3px" }}
            />
            63
          </div>
          <div>
            <AndroidIcon
              style={{ color: "grey", fontSize: "13px", margin: "0 3px" }}
            />
            63
          </div>
          <div>
            <AppleIcon
              style={{ color: "grey", fontSize: "13px", margin: "0 3px" }}
            />
            63
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://flagcdn.com/16x12/in.png"
            srcset="https://flagcdn.com/32x24/in.png 2x,
    https://flagcdn.com/48x36/in.png 3x"
            width="16"
            height="12"
            alt="South Africa"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">South Africa</span>
          </div>
          <div>
            <AppleIcon
              style={{ color: "grey", fontSize: "13px", margin: "0 3px" }}
            />
            63
          </div>
          <div>
            <AndroidIcon
              style={{ color: "grey", fontSize: "13px", margin: "0 3px" }}
            />
            63
          </div>
          <div>
            <AppleIcon
              style={{ color: "grey", fontSize: "13px", margin: "0 3px" }}
            />
            63
          </div>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://flagcdn.com/16x12/jp.png"
            srcset="https://flagcdn.com/32x24/jp.png 2x,
    https://flagcdn.com/48x36/jp.png 3x"
            width="16"
            height="12"
            alt="South Africa"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">South Africa</span>
          </div>
          <div>
            <AppleIcon
              style={{ color: "grey", fontSize: "13px", margin: "0 3px" }}
            />
            63
          </div>
          <div>
            <AndroidIcon
              style={{ color: "grey", fontSize: "13px", margin: "0 3px" }}
            />
            63
          </div>
          <div>
            <AppleIcon
              style={{ color: "grey", fontSize: "13px", margin: "0 3px" }}
            />
            63
          </div>
        </li>
      </ul>
    </div>
  );
}
