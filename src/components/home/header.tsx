import React from "react";
import "styles/home/header.css";

const Header = ({markdownObject}: any) => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>
          <span className="header-content-word-shaking">{markdownObject.headerTitleWithLogoColor}</span>
          <br />
          {markdownObject.headerTitleWithWhiteColor}
        </h1>
        <div className="download-btns">
          <img
            src="/images/home/google-play-btn.svg"
            alt=""
            style={{ marginRight: "20px" }}
          />
          <img src="/images/home/app-store-btn.svg" alt="" />
        </div>
        <p>{markdownObject.headerComingSoon}</p>
      </div>

      <div className="header-img">
        <img src={markdownObject.headerImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
