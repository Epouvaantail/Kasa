import React from "react";
import "../style/header.css";
import { NavLink } from "react-router-dom";
import logoKasa from "../assets/images/logo_kasa.svg";

const Header = () => {
  return (
    <header className="nav__container">
      <div className="kasa__logo">
        <img src={logoKasa} alt="logo kasa" />
      </div>
      <nav className="navigation">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "nav__link" : "nav__link";
            }}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) => {
              return isActive ? "nav__link" : "nav__link";
            }}
          >
            A Propos
          </NavLink>
      </nav>
    </header>
  );
};
export default Header;