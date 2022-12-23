"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import "styles/home/navbar.css";

// markdown
// @ts-ignore
import navbarMd from "cms/navbar/navbar.md";

const Navbar = () => {
  const [activeLink , setActiveLink] = useState(1)
  const [markdownObject, setMarkdownObject] = useState({
    logo: "",
    navItem1: "",
    navItem2: "",
    button: "",
  });

  useEffect(() => {
    const mdString = String(navbarMd)
      .substring(4, String(navbarMd).length - 4)
      .split("\n")
      .join(", ");
    const _mdString = mdString.substring(0, mdString.length - 2);

    const mdObj = _mdString.split(", ").reduce((acc, cur) => {
      const [key, value] = cur.split(": ");
      acc[key] = value;
      return acc;
    }, {});

    setMarkdownObject(mdObj);
  }, []);
  // const [toggle,setToggle] = useState<any>(true)
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <img src={markdownObject.logo} alt="" />
      </Link>
      <input type="checkbox" id="nav-bar-click" />
      <label htmlFor="nav-bar-click" className="menu-btn">
        <i>
          <img src="/images/home/menu.svg" alt="" />
        </i>
      </label>
      <ul>
        <li onClick={()=>{
          setActiveLink(1);
          const Checkbox = document.getElementById("nav-bar-click");
          if(Checkbox)
           Checkbox.checked = false;
           }} className="navbar-items">
          <Link href="/">{markdownObject.navItem1}</Link>
        </li>
        <li onClick={()=>{
          setActiveLink(2);
          const Checkbox = document.getElementById("nav-bar-click");
          if(Checkbox)
           Checkbox.checked = false;
           }}  className="navbar-items">
          <Link style={{ fontWeight : "900"}} href="/team">{markdownObject.navItem2}</Link>
        </li>
        <li  onClick={()=>{
          setActiveLink(3);
          const Checkbox = document.getElementById("nav-bar-click");
          if(Checkbox)
           Checkbox.checked = false;
           }} >
          <Link href="/sponsor">
            <button className="nav-sponsor-btn">{markdownObject.button}</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
