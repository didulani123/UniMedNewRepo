import React from "react";
import "./footer.css";
import "./Privacy";

function Footer() {
  return (
    <footer>
      <div className="footer__content" style={{ backgroundColor: "white" }}>
        <div className="footer__logo">UniMed</div>
        <ul className="footer__links">
          <li className="footer__link">
            <a href="/Privacy">Privacy Policy</a>
          </li>
          <li className="footer__link">
            <a href="/TermsOfService">Terms of Service</a>
          </li>
          <li className="footer__link">
            <a href="/ContactUs">Contact Us</a>
          </li>
        </ul>
        <div className="footer__social-media">
          <a href="#" className="social-media__icon">
            Facebook
          </a>
          <a href="#" className="social-media__icon">
            Twitter
          </a>
          <a href="#" className="social-media__icon">
            LinkedIn
          </a>
        </div>
        <p className="footer__copyright">
          &copy; 2024 UniMed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
