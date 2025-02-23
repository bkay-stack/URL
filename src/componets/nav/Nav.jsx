import { useState } from "react";

import "./nav.style.css";
import Hamburger from "../ham-menu/Hamburger";
import LogoImg from "../../assets/images/logo.svg";
// import WorkingIMG from "../../assets/images/illustration-working.svg";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="nav-bar">
        <div className="logo-wrapper">
          <div className="logo">
            <img src={LogoImg} alt="Company Logo" />
            {/* <h1>SHORTLY</h1> */}
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

              {/* <div className="form-wrap"> */}
              <form action="">
                <div className="login-btn">
                  <button className="login">Login</button>
                </div>
                <div className="sign-up-btn">
                  <button className="sign-up">Sign Up</button>
                </div>
              </form>
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="hamburger-container" onClick={toggleHamburger}>
          <Hamburger className="hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
