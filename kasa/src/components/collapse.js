import React from "react";
// import { useState } from "react";
import ArrowDown from "../assets/images/arrowdown.png";
// import ArrowUp from "../assets/images/arrowup.png"
import "../style/collapse.css";

const collapse = ({state, defaultState = false}) => {
  
  return (
    <div className="collapses">
      <section className="collapse__box">
        <p>Fiabilité</p>
        <img src={ArrowDown} alt="arrow" className="arrow"/>
      </section>
      <section className="collapse__box">
        <p>Respect</p>
        <img src={ArrowDown} alt="arrow" />
      </section>
      <section className="collapse__box">
        <p>Service</p>
        <img src={ArrowDown} alt="arrow" />
      </section>
      <section className="collapse__box">
        <p>Sécurité</p>
        <img src={ArrowDown} alt="arrow" />
      </section>
    </div>
    
  );
};

export default collapse;