import React from "react";
import "./shortner.style.css";
const Shortner = () => {
  return (
    <div className="shortner">
      <input type="text" placeholder="Shorten a link here..." />
      <button className="shorten-btn">Shorten It!</button>
    </div>
  );
};

export default Shortner;
