import React from "react";
import "styles/home/footer.css";

const Footer = () => {
  return (
    <div className="co-footer">
      <div className="co-footer-parts">
        <div className="co-footer-part1">
          <img src="/images/home/footer-logo.svg" alt="" />
        </div>
        <div className="co-footer-part2">
          <p className="co-footer-headers">Pages</p>
          <div className="co-footer-header-items">
            <p className="co-footer-paragraph">Home</p>
            <p className="co-footer-paragraph co-footer-header-items-peragraph-2">
              Team
            </p>
          </div>
        </div>
        <div className="co-footer-part3">
          <p className="co-footer-paragraph">Sponsors</p>
        </div>
        <div className="co-footer-part4">
          <p className="co-footer-headers">Contact</p>
          <p className="co-footer-paragraph">contact@winningimpact.com</p>
          <p className="co-footer-paragraph">+46 10 641 49 90</p>
        </div>
      </div>

      <footer className="footer">
        <p className="footer-txt footer-txt-first">©2022 Winning Impact AB</p>
        <p className="footer-txt" style={{ textAlign: "right" }}>Privacy Policy</p>
        <p className="footer-txt" style={{ textAlign: "right" }}>Term of Service</p>
      </footer>
    </div>
  );
};

export default Footer;
