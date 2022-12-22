import React from "react";
import "styles/home/brains-behind.css";
import Link from 'next/link'
import { Splide } from "@splidejs/splide";
import '@splidejs/react-splide/css';

const Item = ({ img, name, info1, info2, info3 }: any) => (
  <div className="card">
    <img src={img || ""} alt="" />
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
  React.useEffect(()=>{
    new Splide( '#image-carousel2' ).mount();
  })
  return (
    <div>   
     <div className="brains-behind brains-behind-pc">
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
     <div className="brains-behind brains-behind-mob">
      {/* title */}
      <section className="brains-behind-header">
        <h1>
          <span className="brains-behind-header-word-color">
            {markdownObject.brainsBehindTitleWithLogoColor}
          </span>{" "}
          {markdownObject.brainsBehindTitleWithWhiteColor}
        </h1>
        
      </section>

      {/* content */}
      <section className="cards">
        <section id="image-carousel2" className="splide brains-con" aria-label="Beautiful Images">
  <div className="splide__track ">
		<ul className="splide__list">
			<li className="splide__slide card">
				<img src={markdownObject.bannerBgImage1} alt=""/>
        <Item
            name={markdownObject.bannerBgImage1Name}
            info1={markdownObject.bannerBgImage1Info1}
            info2={markdownObject.bannerBgImage1Info2}
            info3={markdownObject.bannerBgImage1Info3}
          />
			</li>
			<li className="splide__slide">
				<img src={markdownObject.bannerBgImage2} alt=""/>
        <Item
            name={markdownObject.bannerBgImage2Name}
            info1={markdownObject.bannerBgImage2Info1}
            info2={markdownObject.bannerBgImage2Info2}
            info3={markdownObject.bannerBgImage2Info3}
          />
        
			</li>
   
			<li className="splide__slide">
				<img src={markdownObject.bannerBgImage3} alt=""/>
        <Item
            name={markdownObject.bannerBgImage3Name}
            info1={markdownObject.bannerBgImage3Info1}
            info2={markdownObject.bannerBgImage3Info2}
            info3={markdownObject.bannerBgImage3Info3}
          />
      
			</li>

		</ul>
    <Link href="/team">
        <button style={{width:"100%",marginTop:"20px"}} className="brains-behind-header-btn ">Meet the full team</button>
        </Link>
  
  </div>

    
        </section>

      
   
      </section>
    
    </div>

    </div>


  );
};

export default BrainsBehind;
