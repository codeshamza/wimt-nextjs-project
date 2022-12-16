import React from "react";
import "styles/home/banner-bg.css";

const BannerBg = ({ markdownObject }: any) => {
  return (
    <div className="banner-bg">
      <div>
        <p className="banner-bg-line1">
          {markdownObject.bannerBgQuote}
        
        </p>
        <p className="banner-bg-line2">
          {markdownObject.bannerBgName},
          <br />
          {markdownObject.bannerBgPosition}
        </p>
      </div>
    </div>
  );
};

export default BannerBg;
