import React from "react";
import "styles/home/sponsor-apply.css";
import Link from 'next/link'


const SponsorApply = ({ markdownObject }: any) => {
  return (
    <div className="sponsor-apply">
      <h1>
        {markdownObject.sponsorApplyTitleWithWhiteColor1}{" "}
        <span className="sponsor-apply-header-word-color">
          {markdownObject.sponsorApplyTitleWithLogoColor}
        </span>{" "}
        {markdownObject.sponsorApplyTitleWithWhiteColor2}
      </h1>
      <div className="sponsors">
        <img
          className="sponsors-img1"
          src={markdownObject.sponsorApplyLogo1}
          alt=""
        />
        <img
          className="sponsors-img2"
          src={markdownObject.sponsorApplyLogo2}
          alt=""
        />
      </div>
      <Link href="/sponsor" >
      <button className="sponsor-apply-btn">
        {markdownObject.sponsorApplyBtnText}
      </button>
      </Link>
    </div>
  );
};

export default SponsorApply;
