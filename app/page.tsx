"use client";

import React, { useState, useEffect } from "react";
import {
  Header,
  Works,
  BannerBg,
  BrainsBehind,
  SponsorApply,
  EarlyAdopters,
} from "components/home";
// import "./home.css";

// markdown
// @ts-ignore
import homeMd from "cms/home/home.md";
console.log(homeMd);


const HomePage = () => {
  const [markdownObject, setMarkdownObject] = useState({
    // header
    headerTitleWithLogoColor: "",
    headerTitleWithWhiteColor: "",
    headerComingSoon: "",
    headerImage: "",

    // works
    worksTitleWe: "",
    worksTitleWithLogoColor: "",
    worksTitleWithWhiteColor: "",
    worksImage1: "",
    worksImage1Name: "",
    worksImage1Position: "",
    worksImage1Skill: "",
    worksImage2: "",
    worksImage2Name: "",
    worksImage2Position: "",
    worksImage2Skill: "",
    worksImage3: "",
    worksImage3Name: "",
    worksImage3Position: "",
    worksImage3Skill: "",

    // bannerBg
    // bannerBgQuote: "",
    // bannerBgName: "",
    // bannerBgPosition: "",

    // brainsBehind
    brainsBehindTitleWithLogoColor: "",
    brainsBehindTitleWithWhiteColor: "",
    bannerBgImage1: "",
    bannerBgImage2: "",
    bannerBgImage3: "",
    bannerBgImage1Name: "",
    bannerBgImage1Info1: "",
    bannerBgImage2Name: "",
    bannerBgImage3Name: "",
    bannerBgImage3Info1: "",
    bannerBgImage3Info2: "",
    bannerBgImage2Info1: "",
    bannerBgImage3Info3: "",
    bannerBgImage2Info2: "",
    bannerBgImage1Info2: "",
    bannerBgImage2Info3: "",
    bannerBgImage1Info3: "",

    // sponsorApply
    sponsorApplyTitleWithWhiteColor1: "",
    sponsorApplyTitleWithLogoColor: "",
    sponsorApplyTitleWithWhiteColor2: "",
    sponsorApplyLogo1: "",
    sponsorApplyLogo2: "",
    sponsorApplyBtnText: "",

    // earlyAdopters
    earlyAdoptersAdopterTitle3Info1: "",
    earlyAdoptersAdopterTitle2Info1: "",
    earlyAdoptersAdopterTitle3Info2: "",
    earlyAdoptersAdopterTitle2Info2: "",
    earlyAdoptersAdopterTitle1Position: "",
    earlyAdoptersAdopterTitle1Info1: "",
    earlyAdoptersAdopterTitle2Position: "",
    earlyAdoptersAdopterTitle1Info2: "",
    earlyAdoptersAdopterTitle3Position: "",
    earlyAdoptersTitleWithLogoColor: "",
    earlyAdoptersAdopterTitle1: "",
    earlyAdoptersAdopterTitle2: "",
    earlyAdoptersAdopterTitle3: "",
    earlyAdoptersTitleWithWhiteColor: "",
  });

  useEffect(() => {
    const mdString = String(homeMd)
      .substring(4, String(homeMd).length - 4)
      .split("\n")
      .join(", ");
    const _mdString = mdString.substring(0, mdString.length - 2);

    const mdObj = _mdString.split(", ").reduce((acc: any, cur) => {
      const [key, value] = cur.split(": ");
      acc[key.trim()] = value;
      return acc;
    }, {});

    setMarkdownObject(mdObj);
  }, []);

  // console.log(markdownObject);

  return (
    <div className="homePage">
      <Header markdownObject={markdownObject} />
      <Works markdownObject={markdownObject} />
      <BannerBg />
      <BrainsBehind markdownObject={markdownObject} />
      <SponsorApply markdownObject={markdownObject} />
      <EarlyAdopters markdownObject={markdownObject} />
    </div>
  );
};

export default HomePage;
