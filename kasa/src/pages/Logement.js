// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import dataAccomodation from "../data/logement.json";
import Carousel from "../components/carousel";
import "../style/Logement.css"

const Logement = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const data = dataAccomodation.find((item) => item.id === id);
  return(
      <Carousel />
  )
}

export default Logement