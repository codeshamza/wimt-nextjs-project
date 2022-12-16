import React, { useEffect } from "react";
import "styles/home/works.css";
// Default theme
import { Splide } from "@splidejs/splide";
import '@splidejs/react-splide/css';


const Worker = ({ img, name, position, icon, skill }) => (
  <div className="card">
    <img src={img || ""} alt="" />
    <div className="card-content">
      <p className="line1">{name}</p>
      <p className="line2">{position}</p>
      <div className="card-content-border-line"></div>
      <div className="line3-full">
        <img src={icon} alt="icon" />
        <p className="line3">{skill}</p>
      </div>
    </div>
  </div>
);

const Works = ({ markdownObject }) => {
  React.useEffect(()=>{
    new Splide( '#image-carousel' ).mount();
  })
  return (
    <>
    <div id="workpc" className="works">
      {/* title */}
      <h1 className="works-header">
        {markdownObject.worksTitleWe}{" "}
        <span className="works-header-color-word">
          {markdownObject.worksTitleWithLogoColor}
        </span>{" "}
        {markdownObject.worksTitleWithWhiteColor}
      </h1>

      {/* content */}
      <section className="works-content">
        <div>
          <Worker
            img={markdownObject.worksImage1}
            name={markdownObject.worksImage1Name}
            position={markdownObject.worksImage1Position}
            icon="/images/home/football.svg"
            skill={markdownObject.worksImage1Skill}
          />
          <Worker
            img={markdownObject.worksImage2}
            name={markdownObject.worksImage2Name}
            position={markdownObject.worksImage2Position}
            icon="/images/home/skiing.svg"
            skill={markdownObject.worksImage2Skill}
          />
          <Worker
            img={markdownObject.worksImage3}
            name={markdownObject.worksImage3Name}
            position={markdownObject.worksImage3Position}
            icon="/images/home/equestrian.svg"
            skill={markdownObject.worksImage3Skill}
          />
        </div>
      </section>
    </div>

  
    <div id="mobilework" className="works">
 


      {/* title */}
      <h1 className="works-header">
        {markdownObject.worksTitleWe}{" "}
        <span className="works-header-color-word">
          {markdownObject.worksTitleWithLogoColor}
        </span>{" "}
        {markdownObject.worksTitleWithWhiteColor}
      </h1>

      {/* content */}
      <section className="works-content">
        <div>
        <section id="image-carousel" class="splide" aria-label="Beautiful Images">
  <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
				<img src={markdownObject.worksImage1} alt=""/>
        <Worker
            name={markdownObject.worksImage1Name}
            position={markdownObject.worksImage1Position}
            icon="/images/home/skiing.svg"
            skill={markdownObject.worksImage1Skill}
          />
			</li>
			<li class="splide__slide">
				<img src={markdownObject.worksImage2} alt=""/>
        <Worker
            name={markdownObject.worksImage2Name}
            position={markdownObject.worksImage2Position}
            icon="/images/home/skiing.svg"
            skill={markdownObject.worksImage2Skill}
          />
			</li>
   
			<li class="splide__slide">
				<img src={markdownObject.worksImage3} alt=""/>
        <Worker
            name={markdownObject.worksImage3Name}
            position={markdownObject.worksImage3Position}
            icon="/images/home/skiing.svg"
            skill={markdownObject.worksImage3Skill}
          />
			</li>
		</ul>
  </div>
        </section>
        </div>
      </section>
    </div>
    </>
  );
};

export default Works;
