import React from "react";
import "styles/home/early-adopters.css";

const Item = ({ title, info1, info2, position }: any) => (
  <div className="early-adopters-box">
    <h1 className="early-adopters-box-line1">{title}</h1>
    <p className="early-adopters-box-line2">{info1}</p>
    <div className="early-adopters-box-line-border"></div>
    <p className="early-adopters-box-line2">{info2}</p>
    <p className="early-adopters-box-line3">
      {position}, <br /> Commercial Manager
    </p>
  </div>
);






const EarlyAdopters = ({  }: any) => {
  const [markdownObject, setMarkdownObject] = React.useState({
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
    bannerBgQuote: "",
    bannerBgName: "",
    bannerBgPosition: "",

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

  return (
    <div className="early-adopters">
      <h1 className="early-adopters-header">
        {markdownObject.earlyAdoptersTitleWithWhiteColor}{" "}
        <span className="early-adopters-header-word-color">
          {markdownObject.earlyAdoptersTitleWithLogoColor}
        </span>
      </h1>

      <section className="early-adopters-all-box">
        <div>
          <Item
            title={markdownObject.earlyAdoptersAdopterTitle1}
            info1={markdownObject.earlyAdoptersAdopterTitle1Info1}
            info2={markdownObject.earlyAdoptersAdopterTitle1Info2}
            position={markdownObject.earlyAdoptersAdopterTitle1Position}
          />
          <Item
            title={markdownObject.earlyAdoptersAdopterTitle2}
            info1={markdownObject.earlyAdoptersAdopterTitle2Info1}
            info2={markdownObject.earlyAdoptersAdopterTitle2Info2}
            position={markdownObject.earlyAdoptersAdopterTitle2Position}
          />
          <Item
            title={markdownObject.earlyAdoptersAdopterTitle3}
            info1={markdownObject.earlyAdoptersAdopterTitle3Info1}
            info2={markdownObject.earlyAdoptersAdopterTitle3Info2}
            position={markdownObject.earlyAdoptersAdopterTitle3Position}
          />
        </div>
      </section>
    </div>
  );
};

export default EarlyAdopters;
