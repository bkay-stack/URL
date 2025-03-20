import React from "react";
import "./shortner.style.css";
// import bgMobileShortener from "../../assets/images/bg-shorten-mobile.svg";
// import bgDesktopShortener from "../../assets/images/bg-shorten-desktop.svg";
const Shortner = () => {
  return (
    <>
      <section className="shortner">
        <form>
          <>
            <input type="text" placeholder="Shorten a link here..." />
            <button className="shorten-btn">Shorten It!</button>
          </>
        </form>
      </section>
    </>
  );
};

export default Shortner;
