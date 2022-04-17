import React from "react";
import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";
import GroupIcon from "@mui/icons-material/Group";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Puspender</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <img
              src="https://flagcdn.com/16x12/in.png"
              srcset="https://flagcdn.com/32x24/in.png 2x,
    https://flagcdn.com/48x36/in.png 3x"
              width="16"
              height="12"
              alt="India"
            />
          </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer" style={{ margin: "0 20px" }}>
            <GroupIcon />
          </div>
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
