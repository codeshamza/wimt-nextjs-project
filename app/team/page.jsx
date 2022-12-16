"use client";

import React, { useState, useEffect } from "react";
import "./team.css";

// markdown
// @ts-ignore
import teamMd from "cms/team/team.md";
import Link from "next/link";

const TeamPage = () => {
  const [activeTab, setActiveTab] = React.useState(1);
  let Tab1 =  document.getElementById("Tab1Items");
  let Tab2 =  document.getElementById("Tab2Items");
  let Tab3 =  document.getElementById("Tab3Items");

    setTimeout(()=>{
      let Tab1 =  document.getElementById("Tab1Items");
      let Tab2 =  document.getElementById("Tab2Items");
      let Tab3 =  document.getElementById("Tab3Items");
      Tab1.style.display = "flex";
      Tab2.style.display = "none";
      Tab3.style.display = "none";
    },100)
    
  const Tab1Function = () =>{
    setActiveTab(1)
   Tab1.style.display = "flex";
   Tab2.style.display = "none";
   Tab3.style.display = "none";

  }
  const Tab2Function = () =>{
    setActiveTab(2)
   Tab2.style.display = "flex";
   Tab1.style.display = "none";
   Tab3.style.display = "none";

  }
  const Tab3Function = () =>{
    setActiveTab(3)
   Tab3.style.display = "flex";
   Tab2.style.display = "none";
   Tab1.style.display = "none";

  }
  const [markdownObject, setMarkdownObject] = useState({
    headerTitleWithWhiteColor1: "The",
    headerTitleWithLogoColor: "Winning",
    headerTitleWithWhiteColor2: "Team",
    headerText:
      "We are proud to be able to say that we literally have the greatest team. A Winning team that's brought together to make an Impact.",
    headerImage: "/upload/images/top-header-img-team.svg",
    ourTeamHeader: "Our Team",
    ourTeamHeaderBtn1: "Management",
    ourTeamHeaderBtn2: "The board",
    ourTeamHeaderBtn3: "Advisors & Investors",
    ourTeamWorker1Image: "/upload/images/worker-1.svg",
    ourTeamWorker1Name: "Rustan Hakansson",
    ourTeamWorker1Position: "Co-founder & CTO",
    ourTeamWorker1SportsHeader: "Favorite sport",
    ourTeamWorker1SportsImage: "/upload/images/volleyball.svg",
    ourTeamWorker1SportsName: "Volleyball",
    ourTeamWorker2Image: "/upload/images/worker-2.svg",
    ourTeamWorker2Name: "Fredik Niemelä",
    ourTeamWorker2Position: "Co-founder & CEO",
    ourTeamWorker2SportsHeader: "Favorite sport",
    ourTeamWorker2SportsImage: "/upload/images/programming.svg",
    ourTeamWorker2SportsName: "Programming",
    ourTeamWorker3Image: "/upload/images/worker-3.svg",
    ourTeamWorker3Name: "Sebastian Lundgren",
    ourTeamWorker3Position: "Co-founder & CEO",
    ourTeamWorker3SportsHeader: "Favorite sport",
    ourTeamWorker3SportsImage: "/upload/images/hockey.svg",
    ourTeamWorker3SportsName: "Hockey",
    ourTeamWorker4Image: "/upload/images/worker-4.svg",
    ourTeamWorker4Name: "Krister Cullberg",
    ourTeamWorker4Position: "CFO",
    ourTeamWorker4SportsHeader: "Favorite sport",
    ourTeamWorker4SportsImage: "/upload/images/football.svg",
    ourTeamWorker4SportsName: "Football",
    ourTeamWorker5Image: "/upload/images/worker-5.svg",
    ourTeamWorker5Name: "Alicia Pierrou",
    ourTeamWorker5Position: "Co-founder & HSC",
    ourTeamWorker5SportsHeader: "Favorite sport",
    ourTeamWorker5SportsImage: "/upload/images/waterpolo.svg",
    ourTeamWorker5SportsName: "Waterpolo",
    bannerBgQuote: '"Our team is world leading experts',
    bannerBgName: "Rustan Håkansson",
    bannerBgPosition: "CEO at Winning Impact",
  });

  useEffect(() => {
   
    const mdString = String(teamMd)
      .substring(4, String(teamMd).length - 4)
      .split("\n")
      .join(", ");
    const _mdString = mdString.substring(0, mdString.length - 2);

    const mdObj = _mdString.split(", ").reduce((acc, cur) => {
      const [key, value] = cur.split(": ");
      acc[key.trim()] = value;
      return acc;
    }, {});

    setMarkdownObject(mdObj);
  }, []);

  // console.log(markdownObject);

  return (
    <main className="teamPage">
      {/* <!-- HEADER - HEADER - HEADER - HEADER - HEADER - HEADER - HEADER - HEADER - HEADER - HEADER --> */}
      <section className="header">
        <div className="header-content">
          <h1>
            {markdownObject.headerTitleWithWhiteColor1} <br />
            <span className="header-content-word-shaking">
              {markdownObject.headerTitleWithLogoColor}
            </span>{" "}
            {markdownObject.headerTitleWithWhiteColor2}
          </h1>

          <p>
            {markdownObject.headerText}
            {/* We are proud to be able to say that we literally have the greatest
            team. A Winning team that&apos;s brought together to make an Impact. */}
          </p>
        </div>

        <div className="header-img">
          <img src={markdownObject.headerImage} alt="" />
        </div>
      </section>

      {/* <!-- OUR TEAM - OUR TEAM - OUR TEAM - OUR TEAM - OUR TEAM - OUR TEAM - OUR TEAM - OUR TEAM --> */}

      <section className="our-team">
        <div className="our-team-header">
          <h1>{markdownObject.ourTeamHeader}</h1>
          <div className="our-team-header-btns">
            <button
              className="our-team-header-btn1"
              style={{
                backgroundColor: activeTab === 1 ? "#d96a2c" : "transparent",
                color: activeTab === 1 ? "#fff" : "#999",
              }}
              onClick={Tab1Function}
            >
              {markdownObject.ourTeamHeaderBtn1}
            </button>
            <button
              className="our-team-header-btn2"
              style={{
                backgroundColor: activeTab === 2 ? "#d96a2c" : "transparent",
                color: activeTab === 2 ? "#fff" : "#999",
              }}
              onClick={Tab2Function}
            >
              {markdownObject.ourTeamHeaderBtn2}
            </button>
            <button
              className="our-team-header-btn3"
              style={{
                backgroundColor: activeTab === 3 ? "#d96a2c" : "transparent",
                color: activeTab === 3 ? "#fff" : "#999",
              }}
              onClick={Tab3Function}
            >
              {markdownObject.ourTeamHeaderBtn3}
            </button>
          </div>
          <br />
        </div>

        <div id="Tab1Items" className="workers-pages-1">
          <div className="worker">
            <img src={markdownObject.ourTeamWorker1Image} alt="" />
            <div className="worker_details">
            <h1 className="worker-name">{markdownObject.ourTeamWorker1Name}</h1>
            <Link href="#">
            <img src="/images/team/Linkedin.svg" alt="" />
            </Link>
            </div>
            <div className="work-name">
              <p>{markdownObject.ourTeamWorker1Position}</p>
            </div>
            <p className="favorite-sport">
              {markdownObject.ourTeamWorker1SportsHeader}
            </p>
            <div className="games">
              <img src={markdownObject.ourTeamWorker1SportsImage} alt="" />
              <p>{markdownObject.ourTeamWorker1SportsName}</p>
            </div>
          </div>
          <div className="worker">
            <img src={markdownObject.ourTeamWorker2Image} alt="" />
            <div className="worker_details">
            <h1 className="worker-name">{markdownObject.ourTeamWorker2Name}</h1>
            <Link href="#">
            <img src="/images/team/Linkedin.svg" alt="" />
            </Link>
            </div>
            <div className="work-name">
              <p>{markdownObject.ourTeamWorker2Position}</p>
            </div>
            <p className="favorite-sport">
              {markdownObject.ourTeamWorker2SportsHeader}
            </p>

            <div className="games">
              <img src={markdownObject.ourTeamWorker2SportsImage} alt="" />
              <p>{markdownObject.ourTeamWorker2SportsName}</p>
            </div>
          </div>
          <div className="worker">
            <img src={markdownObject.ourTeamWorker3Image} alt="" />
            <div className="worker_details">
            <h1 className="worker-name">{markdownObject.ourTeamWorker3Name}</h1>
            <Link href="#">
            <img src="/images/team/Linkedin.svg" alt="" />
            </Link>
            </div>
            <div className="work-name">
              <p>{markdownObject.ourTeamWorker3Position}</p>
            </div>
            <p className="favorite-sport">
              {markdownObject.ourTeamWorker3SportsHeader}
            </p>

            <div className="games">
              <img src={markdownObject.ourTeamWorker3SportsImage} alt="" />
              <p>{markdownObject.ourTeamWorker3SportsName}</p>
            </div>
          </div>
        </div>

        <br />
        <div id="Tab2Items" className="workers-pages-1">
          <div className="worker">
            <img src={markdownObject.ourTeamWorker4Image} alt="" />
            <h1 className="worker-name">{markdownObject.ourTeamWorker4Name}</h1>
            <div className="work-name">
              <p>{markdownObject.ourTeamWorker4Position}</p>
            </div>
            <p className="favorite-sport">{markdownObject.ourTeamWorker4SportsHeader}</p>

            <div className="games">
              <img src={markdownObject.ourTeamWorker4SportsImage} alt="" />
              <p>{markdownObject.ourTeamWorker4SportsName}</p>
            </div>
          </div>
          <div className="worker">
            <img src={markdownObject.ourTeamWorker5Image} alt="" />
            <h1 className="worker-name">{markdownObject.ourTeamWorker5Name}</h1>
            <div className="work-name">
              <p>{markdownObject.ourTeamWorker5Position}</p>
            </div>
            <p className="favorite-sport">{markdownObject.ourTeamWorker5SportsHeader}</p>

            <div className="games">
              <img src={markdownObject.ourTeamWorker5SportsImage} alt="" />
              <p>{markdownObject.ourTeamWorker5SportsName}</p>
            </div>
          </div>
          <div className="worker"></div>
        </div>

        <div id="Tab3Items" className="workers-pages-1">
          <div className="worker">
            <img src={markdownObject.ourTeamWorker3Image} alt="" />
            <div className="worker_details">
            <h1 className="worker-name">{markdownObject.ourTeamWorker3Name}</h1>
            <Link href="#">
            <img src="/images/team/Linkedin.svg" alt="" />
            </Link>
            </div>
            <div className="work-name">
              <p>{markdownObject.ourTeamWorker3Position}</p>
            </div>
            <p className="favorite-sport">
              {markdownObject.ourTeamWorker3SportsHeader}
            </p>

            <div className="games">
              <img src={markdownObject.ourTeamWorker3SportsImage} alt="" />
              <p>{markdownObject.ourTeamWorker3SportsName}</p>
            </div>
          </div>
          <div className="worker">
            <img src={markdownObject.ourTeamWorker4Image} alt="" />
            <div className="worker_details">
            <h1 className="worker-name">{markdownObject.ourTeamWorker4Name}</h1>
            <Link href="#">
            <img src="/images/team/Linkedin.svg" alt="" />
            </Link>
            </div>
            <div className="work-name">
              <p>{markdownObject.ourTeamWorker4Position}</p>
            </div>
            <p className="favorite-sport">
              {markdownObject.ourTeamWorker4SportsHeader}
            </p>
            <div className="games">
              <img src={markdownObject.ourTeamWorker4SportsImage} alt="" />
              <p>{markdownObject.ourTeamWorker4SportsName}</p>
            </div>
          </div>
          <div className="worker">
            <img src={markdownObject.ourTeamWorker5Image} alt="" />
            <div className="worker_details">
            <h1 className="worker-name">{markdownObject.ourTeamWorker5Name}</h1>
            <Link href="#">
            <img src="/images/team/Linkedin.svg" alt="" />
            </Link>
            </div>
            <div className="work-name">
              <p>{markdownObject.ourTeamWorker5Position}</p>
            </div>
            <p className="favorite-sport">
              {markdownObject.ourTeamWorker5SportsHeader}
            </p>

            <div className="games">
              <img src={markdownObject.ourTeamWorker5SportsImage} alt="" />
              <p>{markdownObject.ourTeamWorker5SportsName}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-bg">
        <p className="banner-bg-line1">
          {markdownObject.bannerBgQuote}
          {/* &quot;Our team is world leading experts, and our different
          characteristics <br /> and areas of knowledge truly makes us a winning
          team.&quot; */}
        </p>
        <p className="banner-bg-line2">
          {markdownObject.bannerBgName},
          <br /> {markdownObject.bannerBgPosition}
        </p>
      </section>
    </main>
  );
};

export default TeamPage;
