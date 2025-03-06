import React from "react";
import "./boost.style.css";
import bgDesktop from "../../assets/images/bg-boost-desktop.svg";
import bgMobile from "../../assets/images/bg-boost-mobile.svg";
const Boost = () => {
  return (
    <>
      <section className="boost">
        <picture>
          <source media="(max-width: 568px)" srcSet={bgMobile} />
          <img src={bgDesktop} alt="boost" />
        </picture>
        <div className="boost-content">
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </div>
      </section>
    </>
  );
};

export default Boost;
