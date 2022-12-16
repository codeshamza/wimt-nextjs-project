import React from "react";
import "styles/home/works.css";

const Worker = ({ img, name, position, icon, skill }: any) => (
  <div className="card">
    <img src={img} alt="profilePic" />
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

const Works = ({ markdownObject }: any) => {
  return (
    <div className="works">
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
  );
};

export default Works;
