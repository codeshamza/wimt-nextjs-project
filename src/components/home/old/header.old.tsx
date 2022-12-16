import React from "react";
import "styles/home/header.css";

const Header = ({markdownObject}: any) => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>
          <span className="header-content-word-shaking">Shaking up</span>
          <br />
          community building & sport financing
        </h1>
        <div className="download-btns">
          <img
          id="home-img"
            src="/images/home/google-play-btn.svg"
            alt=""
            style={{ marginRight: "15px !important" }}
          />
          <img style={{ marginLeft: "15px !important" }} src="/images/home/app-store-btn.svg" alt="" />
        </div>
        <p>coming soon</p>
      </div>

      <div  className="header-img">
        <img src="/images/home/top-header-img.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
