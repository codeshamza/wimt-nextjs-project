import Link from "next/link";
import React from "react";
import "styles/home/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link href="/" className="nav-logo">
        <img src="/images/home/logo.svg" alt="" />
      </Link>
      <input type="checkbox" id="nav-bar-click" />
      <label htmlFor="nav-bar-click" className="menu-btn">
        <i>
          <img src="/images/home/menu.svg" alt="" />
        </i>
      </label>
      <ul>
        <li className="navbar-items">
          <Link href="/">Home</Link>
        </li>
        <li className="navbar-items">
          <Link href="/team">Team</Link>
        </li>
        <li>
          <Link href="/sponsor">
            <button className="nav-sponsor-btn">Apply to sponsor</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
