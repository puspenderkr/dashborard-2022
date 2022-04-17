import "./widgetSm.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Rating from "@mui/material/Rating";

export default function WidgetSm() {
  const Button = ({ type }) => {
    return <button className={"widgetSmButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Top Related Application</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <GitHubIcon className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Github</span>
            <div className="widgetSmSub">
              <span className="widgetSmUserTitle">Windows</span>
              <Button type="Free" />
            </div>
          </div>
          <div className="widgetSmRate">
            <Rating
              name="half-rating-read"
              defaultValue={4}
              precision={0.5}
              readOnly
            />
            5 Reviews
          </div>
        </li>
        <li className="widgetSmListItem">
          <GitHubIcon className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Github</span>
            <div className="widgetSmSub">
              <span className="widgetSmUserTitle">Windows</span>
              <Button type="Free" />
            </div>
          </div>
          <div className="widgetSmRate">
            <Rating
              name="half-rating-read"
              defaultValue={4}
              precision={0.5}
              readOnly
            />
            5 Reviews
          </div>
        </li>
        <li className="widgetSmListItem">
          <GitHubIcon className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Github</span>
            <div className="widgetSmSub">
              <span className="widgetSmUserTitle">Windows</span>
              <Button type="Free" />
            </div>
          </div>
          <div className="widgetSmRate">
            <Rating
              name="half-rating-read"
              defaultValue={4}
              precision={0.5}
              readOnly
            />
            5 Reviews
          </div>
        </li>
        <li className="widgetSmListItem">
          <GitHubIcon className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Github</span>
            <div className="widgetSmSub">
              <span className="widgetSmUserTitle">Windows</span>
              <Button type="Free" />
            </div>
          </div>
          <div className="widgetSmRate">
            <Rating
              name="half-rating-read"
              defaultValue={4}
              precision={0.5}
              readOnly
            />
            5 Reviews
          </div>
        </li>
        <li className="widgetSmListItem">
          <GitHubIcon className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername"> Github</span>
            <div className="widgetSmSub">
              <span className="widgetSmUserTitle">Windows</span>
              <Button type="Free" />
            </div>
          </div>
          <div className="widgetSmRate">
            <Rating
              name="half-rating-read"
              defaultValue={4}
              precision={0.5}
              readOnly
            />
            5 Reviews
          </div>
        </li>
      </ul>
    </div>
  );
}
