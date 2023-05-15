import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <p>404</p>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "nav__link active__link" : "nav__link";
            }}
          >
            Retourner sur la page d'accueil
          </NavLink>
    </main>
  );
};
export default Error;