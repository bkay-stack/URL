import React from "react";
import "./footer.style.css";
import fbImg from "../../assets/images/icon-facebook.svg";
import twImg from "../../assets/images/icon-twitter.svg";
import pinImg from "../../assets/images/icon-pinterest.svg";
import instaImg from "../../assets/images/icon-instagram.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-logo">
          <h1>Shortly</h1>
        </div>

        <div className="footer-list-items">
          <div className="footer-links">
            <div className="footer-link-header">
              <h2 className="margin-top">Features</h2>
            </div>
            <ul className="footer-list ">
              <li>
                <a href="#"> Link Shortening</a>
              </li>
              <li>
                <a href="#"> Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <div className="footer-link-header ">
              <h2 className="margin-top">Resources</h2>
            </div>
            <ul className="footer-list">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#"> Developers </a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <div className="footer-link-header">
              <h2 className="margin-top">Company</h2>
            </div>
            <ul className="footer-list">
              <li>
                <a href="#"> About</a>
              </li>
              <li>
                <a href="#"> Our Team</a>
              </li>
              <li>
                <a href="#"> Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" icons-footer ">
          <ul className=" icon-footer">
            <li>
              <img src={fbImg} alt="" />
            </li>
            <li>
              <img src={twImg} alt="" />
            </li>
            <li>
              <img src={pinImg} alt="" />
            </li>
            <li>
              <img src={instaImg} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
