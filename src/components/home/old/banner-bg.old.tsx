import React from "react";
import "styles/home/banner-bg.css";

const BannerBg = ({markdownObject}: any) => {
  return (
    <div className="banner-bg">
      <p className="banner-bg-line1">
        &quot;We focus on a safe and inspiring digital environment,
        <br /> with groundbreaking income sources for athletes and clubs.
        <br /> We are creating a new universe for every sports fan on the
        planet&quot;
      </p>
      <p className="banner-bg-line2">
        Sebastian Lundgren,
        <br />
        CEO at Winning Impact AB
      </p>
    </div>
  );
};

export default BannerBg;
