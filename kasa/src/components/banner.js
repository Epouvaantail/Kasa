import React from "react";
import "../style/main.css";
import Cliff from "../assets/images/falaise.png";

const Banner = () => {
  return (
    <div className="home__banner">
      <img src={Cliff} alt="banner kasa" />      
      <h1>
        Chez vous,
        <span className="line-break"></span> partout et ailleurs
      </h1>
    </div>
  );
};

export default Banner;