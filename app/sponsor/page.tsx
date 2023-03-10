"use client";

import React, { useState, useEffect } from "react";
import "styles/sponsor/sponsors.css";
import Navbar from "@/components/layout/sponsorsnavbar";
// markdown
// @ts-ignore
import sponsorMd from "cms/sponsor/sponsor.md";

const SponsorPage = () => {
  const [markdownObject, setMarkdownObject] = useState({
    content: "",
    button: "",
  });

  useEffect(() => {
    const mdString = String(sponsorMd)
      .substring(4, String(sponsorMd).length - 4)
      .split("\n")
      .join(", ");
    const _mdString = mdString.substring(0, mdString.length - 2);

    const mdObj = _mdString.split(", ").reduce((acc: any, cur) => {
      const [key, value] = cur.split(": ");
      acc[key] = value;
      return acc;
    }, {});

    setMarkdownObject(mdObj);
  }, []);

  // console.log(markdownObject);                           
  return (
    <> 
    <Navbar/>
    <div className="sponsorPage">
      <div className="sponsorPage_box">
        <h1 className="box1-line1">Sponsors</h1>
        <p className="box1-line2">{markdownObject.content}</p>
      </div>
      <form action="#">
      <div className="sponsorPage_box">
        <input
          className="sponsors-input"
          type="text"
          placeholder="First name"
          id="firstname"
          minLength={3}
        required />
        <input className="sponsors-input" type="text" placeholder="Last name" minLength={3}  required/>
        <input className="sponsors-input" type="email" placeholder="E-mail" minLength={3} required/>
        <textarea
          className="sponsors-input message-box"
          name="comment"
          form="usrform"
          placeholder="Message"
          minLength={12}
        required/>
        <button type="submit" style={{cursor:"pointer"}} className="box2-btn">{markdownObject.button}</button>
      </div>
      </form>
    </div>
    </>

  );
};

export default SponsorPage;
