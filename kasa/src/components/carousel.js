import React from "react";
import "../style/carousel.css";
import ArrowLeft from"../assets/images/ArrowLeft.svg";
import ArrowRight from "../assets/images/ArrowRight.svg";
import Data from "../data/logement.json"
import { useParams } from "react-router-dom";

const Carousel = () => {
    const { id } = useParams();
    return (
        <div className="carousel">
            <div className="carousel__container">
                <img className="arrow__left" src={ArrowLeft} alt="arrow left"/>
		        <img className="arrow__right" src={ArrowRight} alt="arrow right"/>
            </div>
            {/* <img src={id.cover} alt={} /> */}
		    <div className="number">
		    </div>
	    </div>
    );
};
export default Carousel