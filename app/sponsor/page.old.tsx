"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "styles/sponsor/sponsors.css";

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

  console.log(markdownObject)

  return (
    <div className="sponsorPage">
      <div className="sponsorPage_box">
        <h1 className="box1-line1">Sponsors</h1>
        <p className="box1-line2">
          Scale up and go viral - Get an entire sports movement to become your
          ambassadors. An easier and more effective way for you to promote your
          business. Fill in your details and we&apos;ll be in touch to see how
          to can get the whole sporting world to promote you.
        </p>
      </div>

      <div className="sponsorPage_box">
        <input
          className="sponsors-input"
          type="text"
          placeholder="First name"
        />
        <input className="sponsors-input" type="text" placeholder="Last name" />
        <input className="sponsors-input" type="email" placeholder="E-mail" />
        <textarea
          className="sponsors-input message-box"
          name="comment"
          form="usrform"
          placeholder="Message"
        />
        <button className="box2-btn">Apply</button>
      </div>
    </div>
  );
};

export default SponsorPage;
