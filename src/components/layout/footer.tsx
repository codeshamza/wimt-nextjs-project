"use client";

import React, { useState, useEffect } from "react";
import "styles/home/footer.css";
import Link from "next/link";

// markdown
// @ts-ignore
import footerMd from "cms/footer/footer.md";

const Footer = () => {
  const [markdownObject, setMarkdownObject] = useState({
    footerLogo: "",
    page1: "",
    page2: "",
    page3: "",
    email: "",
    phone: "",
    leftText: "",
    rightText1: "",
    rightText2: "",
  });

  useEffect(() => {
    const mdString = String(footerMd)
      .substring(4, String(footerMd).length - 4)
      .split("\n")
      .join(", ");
    const _mdString = mdString.substring(0, mdString.length - 2);

    // console.log(_mdString)

    const mdObj = _mdString.split(", ").reduce((acc: any, cur) => {
      const [key, value] = cur.split(": ");
      acc[key.trim()] = value;
      return acc;
    }, {});

    setMarkdownObject(mdObj);
    // console.log(mdObj);
  }, []);

  return (
    <div className="co-footer">
      <section className="co-footer-parts">
        <div className="co-footer-part1">
          <img src={markdownObject.footerLogo} alt="" />
        </div>
        <div className="co-footer-part2">
          <p className="co-footer-headers">Pages</p>
          <div className="co-footer-header-items">
            <Link href="/">
            <p className="co-footer-paragraph">{markdownObject.page1}</p>
            </Link>
            <Link href="/team">
            <p className="co-footer-paragraph co-footer-header-items-peragraph-2">
              {markdownObject.page2}
            </p>
            </Link>
            <Link href="/sponsor" >
          <p className="co-footer-paragraph co-footer-header-items-peragraph-2 mobile">{markdownObject.page3}</p>
          </Link>
          </div>
        </div>
        <div className="co-footer-part3 pc">
          <Link href="/sponsor" >
          <p className="co-footer-paragraph ">{markdownObject.page3}</p>
          </Link>
        </div>
        <div className="co-footer-part4">
          <p className="co-footer-headers">Contact</p>
          <p className="co-footer-paragraph">{markdownObject.email}</p>
          <p className="co-footer-paragraph">{markdownObject.phone}</p>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-txt footer-txt-first">{markdownObject.leftText}</p>
        <p className="footer-txt text-right">
          {markdownObject.rightText1}
        </p>
        <p className="footer-txt text-right">
          {markdownObject.rightText2}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
