import React from "react";
import "../style/header.css";
import { NavLink } from "react-router-dom";
import logoKasa from "../assets/images/logo_kasa.svg";

const Header = () => {
  return (
    <div className="nav__container">
      <div className="kasa__logo">
        <img src={logoKasa} alt="logo kasa" />
      </div>
      <div className="navigation">
        <nav>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "nav__link active__link" : "nav__link";
              }}
            >
              Accueil
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? "nav__link active__link" : "nav__link";
              }}
            >
              À Propos
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Header;