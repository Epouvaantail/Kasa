import React from "react";
import "../style/card.css";

const card = ({ props }) => {
  return (
    <div className="card">
      <img src={props.url} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
};

export default card;