import React from "react";
import "styles/home/sponsor-apply.css";

const SponsorApply = ({markdownObject}: any) => {
  return (
    <div className="sponsor-apply">
      <h1>
        Supported by the{" "}
        <span className="sponsor-apply-header-word-color">
          greatest sponsors
        </span>{" "}
        in sport
      </h1>
      <div className="sponsors">
        <img
          className="sponsors-img1"
          src="/images/home/sponsor-1.svg"
          alt=""
        />
        <img
          className="sponsors-img2"
          src="/images/home/sponsor-2.svg"
          alt=""
        />
      </div>
      <button className="sponsor-apply-btn">Apply for sponsor</button>
    </div>
  );
};

export default SponsorApply;
