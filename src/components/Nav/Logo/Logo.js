import React from "react";
import "./Logo.css";
import logo from "../../../assets/images/logo-n2.png";

const Logo = () => {
  //scroll animation
  

  return (
    <div className="logo">
      <a href="index.html">
        <img src={logo} alt="Nikola Jevric" />
      </a>
    </div>
  );
};
export default Logo;
