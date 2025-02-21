import React from "react";
import "./nav.style.css";
import Hamburger from "../ham-menu/Hamburger";
import LogoImg from "../../assets/images/logo.svg";
// import WorkingIMG from "../../assets/images/illustration-working.svg";
const Nav = () => {
  return (
    <header>
      <nav className="nav-bar">
        <div className="logo-wrapper">
          <div className="logo">
            <img src={LogoImg} alt="Company Logo" />
          </div>

          <div className="links">
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

        <div className="hamburger-container">
          <Hamburger className="hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
