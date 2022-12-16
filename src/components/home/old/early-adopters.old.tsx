import React from "react";
import "styles/home/early-adopters.css";

const EarlyAdopters = ({markdownObject}: any) => {
  return (
    <div className="early-adopters">
      <h1 className="early-adopters-header">
        Early <span className="early-adopters-header-word-color">adopters</span>
      </h1>

      <div className="early-adopters-all-box">
        <div className="early-adopters-box">
          <h1 className="early-adopters-box-line1">SDHL</h1>
          <p className="early-adopters-box-line2">
            The greatest women&apos;s hockey league in the world. Combines 10 of
            the largest hockey clubs in Sweden with over a million members and
            fans.
          </p>
          <div className="early-adopters-box-line-border"></div>
          <p className="early-adopters-box-line2">
            &quot;It’s fantastic that a social platform is finally being
            launched, providing security and saving time for the athletes. WIMT
            will be the obvious choice for athletes, clubs and fans.&quot;
          </p>
          <p className="early-adopters-box-line3">
            Angelica Lindeberg, <br /> Commercial Manager
          </p>
        </div>
        <div className="early-adopters-box">
          <h1 className="early-adopters-box-line1">Öijareds golfklubb</h1>
          <p className="early-adopters-box-line2">
            With over 4,000 members, 3 high end courses and 1 multi course, Öijared is one of the best golf courses in Sweden.
          </p>
          <div className="early-adopters-box-line-border"></div>
          <p className="early-adopters-box-line2">
            &quot;It is very important for Swedish sport clubs to gain increased
            income, potentially a life saving solution for many. This could play
            a major role in the future for us and for many other golf
            clubs.&quot;
          </p>
          <p className="early-adopters-box-line3">Lars Brydolf, Club Manager</p>
        </div>
        <div className="early-adopters-box">
          <h1 className="early-adopters-box-line1">Billdals Ridklubb</h1>
          <p className="early-adopters-box-line2">
            Billdal is one of the leading horse clubs in Sweden with over 1,000
            members.
          </p>
          <div className="early-adopters-box-line-border"></div>
          <p className="early-adopters-box-line2">
            &quot;For those of us who are working with children and young
            people, it is very important to create a safe and inspiring
            environment. That’s exactly what WIMT is doing. The platform is also
            saving time for the communication team, and generates revenue, which
            is a nice bonus.&quot;
          </p>
          <p className="early-adopters-box-line3">
            Susanna Granerfeldt,
            <br /> Head of Operations
          </p>
        </div>
      </div>
    </div>
  );
};

export default EarlyAdopters;
