import React from "react";
import "styles/home/early-adopters.css";
import { Splide } from "@splidejs/splide";
import '@splidejs/react-splide/css';

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


const EarlyAdopters = ({ markdownObject }: any) => {
  React.useEffect(()=>{
    new Splide( '#text-carousel',{
      pagination:true,
      arrows:false
    } ).mount();
  })
  return (
    <>
    <div className="early-adopters pc">
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
        <div className="early-adopters mobile">
        <h1 className="early-adopters-header">
          {markdownObject.earlyAdoptersTitleWithWhiteColor}{" "}
          <span className="early-adopters-header-word-color">
            {markdownObject.earlyAdoptersTitleWithLogoColor}
          </span>
        </h1>
  
        <section className="early-adopters-all-box">
        <section id="text-carousel" className="splide work-con" aria-label="Beautiful Images">
  <div className="splide__track">
		<ul className="splide__list">
			<li className="splide__slide">
      <Item
              title={markdownObject.earlyAdoptersAdopterTitle1}
              info1={markdownObject.earlyAdoptersAdopterTitle1Info1}
              info2={markdownObject.earlyAdoptersAdopterTitle1Info2}
              position={markdownObject.earlyAdoptersAdopterTitle1Position}
            />
			</li>
			<li className="splide__slide">
      <Item
              title={markdownObject.earlyAdoptersAdopterTitle2}
              info1={markdownObject.earlyAdoptersAdopterTitle2Info1}
              info2={markdownObject.earlyAdoptersAdopterTitle2Info2}
              position={markdownObject.earlyAdoptersAdopterTitle2Position}
            />
			</li>
   
			<li className="splide__slide">
      <Item
              title={markdownObject.earlyAdoptersAdopterTitle3}
              info1={markdownObject.earlyAdoptersAdopterTitle3Info1}
              info2={markdownObject.earlyAdoptersAdopterTitle3Info2}
              position={markdownObject.earlyAdoptersAdopterTitle3Position}
            />
			</li>
		</ul>
  </div>
        </section>
        </section>
      </div>
      </>
  );
};

export default EarlyAdopters;
