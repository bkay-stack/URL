import { useState } from "react";

import "./nav.style.css";
import Hamburger from "../ham-menu/Hamburger";
// import LogoImg from "../../assets/images/logo.svg";
import WorkingIMG from "../../assets/images/illustration-working.svg";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="nav-bar">
          {/* <div className="logo-wrapper"> */}
          <div className="logo">
            {/* <img src={LogoImg} alt="Company Logo" /> */}
            <h1>SHORTLY</h1>
          </div>

          <div className={`links   ${isOpen ? "active" : ""}`}>
            <div className="nav-links">
              <ul className="nav-list">
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>

              <div className="hamburger-line"></div>

              <form action="">
                {/* <div className="login-btn"> */}
                <span className="login-btn">Login</span>
                {/* </div> */}
                <button className="sign-up-btn">Sign Up</button>
              </form>
            </div>
            {/* </div> */}
          </div>

          <div className="hamburger-container" onClick={toggleHamburger}>
            <Hamburger className="hamburger" />
          </div>
        </nav>

        <div className="hero-section">
          <div className="hero-text">
            <h1>More than just shorter links</h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="hero-btn">
              <button>Get Started</button>
            </div>
          </div>

          <div className="hero-img">
            <img src={WorkingIMG} alt="Working" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
