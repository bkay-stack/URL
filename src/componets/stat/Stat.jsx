import React from "react";
import "./stat.style.css";
import brandImg from "../../assets/images/icon-brand-recognition.svg";
import detailedImg from "../../assets/images/icon-detailed-records.svg";
import fullyImg from "../../assets/images/icon-fully-customizable.svg";

const Stat = () => {
  return (
    <div className="stat">
      <div className="stat-container">
        <h1 className="stat-title">Advanced Statistics</h1>
        <p className="stat-description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="stat-container-img">
        <div className="brand bg-white mg-top">
          <div className="brand-img img-postion-brand icon-size img-bg-style">
            <img src={brandImg} alt="" />
          </div>
          <h2 className="bg-header">Brand Recognition</h2>
          <p className="bg-text">
            {" "}
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="detailed bg-white mg-top">
          <div className="detailedImg img-postion-detail icon-size img-bg-style">
            <img src={detailedImg} alt="" />
          </div>
          <h2 className="bg-header">Detailed Records</h2>
          <p className="bg-text">
            {" "}
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="fully bg-white mg-top">
          <div className="fullyImg img-postion-fully icon-size img-bg-style">
            <img src={fullyImg} alt="" />
          </div>
          <h2 className="bg-header"> Fully Customizable</h2>
          <p className="bg-text">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stat;
