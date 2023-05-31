import React from "react";
import { useState } from "react";
import ArrowDown from "../assets/images/arrowdown.png";
import ArrowUp from "../assets/images/arrowup.png"
import "../style/main.css";

const Collapse = ({ state, defaultState = false }) => {
  const [toggle, setToggle] = useState(defaultState);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className="collapse">
      <div className="collapse__title" onClick={toggleHandler}>
        <h3>{state.title}</h3>
        <img
          className="arrowUp arrowDown"
          src={toggle ? ArrowUp : ArrowDown}
          alt="show content"
        />
      </div>
      <div className={toggle ? "collapse__text" : "text__hidden"}>
        {state.equipments === undefined ? (
          <p>{state.description}</p>
        ) : (
          <div>
            {state.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;