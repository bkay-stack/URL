import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import "./hamburger.style.css";
const HamburgerComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <Hamburger toggled={isOpen} toggle={setIsOpen} className="hamburger" />
    </div>
  );
};

export default HamburgerComponent;
