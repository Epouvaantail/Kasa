import React from "react";
import { NavLink } from "react-router-dom";
import "../style/main.css"

const Error = () => {
  return (
    <main>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/" >
            <p className="nav__home">Retourner sur la page d'accueil</p>
      </NavLink>
    </main>
  );
};
export default Error;