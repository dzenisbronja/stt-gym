import React from "react";
import "./Footer.css";

import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/stt.png";

import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://www.instagram.com/sandzaktopteam/">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>

        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>

        <div class="contact-info">
          <a href="tel:+381658765171">
            <span class="contact-icon">
              <i aria-hidden="true" class="fas fa-phone"></i>
            </span>
            <span class="contact-text">+381 63 441000</span>
          </a>
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
