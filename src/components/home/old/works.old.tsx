import React from "react";
import "styles/home/works.css";

const Works = ({ markdownObject }: any) => {
  return (
    <div className="works">
      <h1 className="works-header">
        We <span className="works-header-color-word">believe</span> in Winning
        Impact
      </h1>
      <div className="works-content">
        <div className="card-1">
          <img src="/images/home/people-img-1.svg" alt="" />
          <div className="card-content">
            <p className="line1">Henrik Larsson</p>
            <p className="line2">Ambassador</p>
            <div className="card-content-border-line"></div>
            <div className="line3-full">
              <img src="/images/home/football.svg" alt="" />
              <p className="line3">Football</p>
            </div>
          </div>
        </div>
        <div className="card-2">
          <img src="/images/home/people-img-2.svg" alt="" />
          <div className="card-content">
            <p className="line1">Walter Wallberg</p>
            <p className="line2">Ambassador</p>
            <div className="card-content-border-line"></div>
            <div className="line3-full">
              <img src="/images/home/skiing.svg" alt="" />
              <p className="line3">Freestyle skiing</p>
            </div>
          </div>
        </div>
        <div className="card-3">
          <img src="/images/home/people-img-3.svg" alt="" />
          <div className="card-content">
            <p className="line1">Malin Baryard</p>
            <p className="line2">Ambassador</p>
            <div className="card-content-border-line"></div>
            <div className="line3-full">
              <img src="/images/home/equestrian.svg" alt="" />
              <p className="line3">Equestrian</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
