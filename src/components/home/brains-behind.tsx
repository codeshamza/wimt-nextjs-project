import React from "react";
import "styles/home/brains-behind.css";
import Link from 'next/link'

const Item = ({ img, name, info1, info2, info3 }: any) => (
  <div className="card">
    <img src={img} alt="peopleImg" />
    <div className="cards-content">
      <h1>{name}</h1>

      <div className="brains-behind-cards-content">
        <p className="brains-behind-cards-dot">•</p>
        <p className="brains-behind-cards-peragraph">{info1}</p>
      </div>
      <div className="brains-behind-cards-content">
        <p className="brains-behind-cards-dot">•</p>
        <p className="brains-behind-cards-peragraph">{info2}</p>
      </div>
      <div className="brains-behind-cards-content">
        <p className="brains-behind-cards-dot">•</p>
        <p className="brains-behind-cards-peragraph">{info3}</p>
      </div>
    </div>
  </div>
);

const BrainsBehind = ({ markdownObject }: any) => {
  return (
    <div className="brains-behind">
      {/* title */}
      <section className="brains-behind-header">
        <h1>
          <span className="brains-behind-header-word-color">
            {markdownObject.brainsBehindTitleWithLogoColor}
          </span>{" "}
          {markdownObject.brainsBehindTitleWithWhiteColor}
        </h1>
        <Link href="/team">
        <button className="brains-behind-header-btn">Meet the full team</button>
        </Link>
      </section>

      {/* content */}
      <section className="cards">
        <div>
          <Item
            img={markdownObject.bannerBgImage1}
            name={markdownObject.bannerBgImage1Name}
            info1={markdownObject.bannerBgImage1Info1}
            info2={markdownObject.bannerBgImage1Info2}
            info3={markdownObject.bannerBgImage1Info3}
          />
          <Item
            img={markdownObject.bannerBgImage2}
            name={markdownObject.bannerBgImage2Name}
            info1={markdownObject.bannerBgImage2Info1}
            info2={markdownObject.bannerBgImage2Info2}
            info3={markdownObject.bannerBgImage2Info3}
          />
          <Item
            img={markdownObject.bannerBgImage3}
            name={markdownObject.bannerBgImage3Name}
            info1={markdownObject.bannerBgImage3Info1}
            info2={markdownObject.bannerBgImage3Info2}
            info3={markdownObject.bannerBgImage3Info3}
          />
        </div>
      </section>
    </div>
  );
};

export default BrainsBehind;
