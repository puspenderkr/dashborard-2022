import "./widgetSm2.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function WidgetSm3() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Top Authors</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">
              <FavoriteIcon style={{ fontSize: "13px", color: "grey" }} /> 13K
            </span>
          </div>
          <button className="widgetSmButton">
            <EmojiEventsIcon
              className="widgetSmIcon"
              style={{ color: "green" }}
            />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">
              <FavoriteIcon style={{ fontSize: "13px", color: "grey" }} /> 14k
            </span>
          </div>
          <button className="widgetSmButton">
            <EmojiEventsIcon
              className="widgetSmIcon"
              style={{ color: "blue" }}
            />
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">
              <FavoriteIcon style={{ fontSize: "13px", color: "grey" }} /> 15k
            </span>
          </div>
          <button className="widgetSmButton">
            <EmojiEventsIcon
              className="widgetSmIcon"
              style={{ color: "red" }}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
