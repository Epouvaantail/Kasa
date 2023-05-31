import React from "react";
import logoFooter from "../assets/images/kasa_white.svg";
import "../style/main.css";

const footer = () => {
  return (
    <footer>
      <img src={logoFooter} alt="logo kasa footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default footer;