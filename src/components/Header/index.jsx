import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../Header/styles.module.css";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <header className={styles.HeaderWrap}>
      <NavLink to="/">
        <img className={styles.HeaderImg} src={logo} alt="La Kasa" />
      </NavLink>
      <nav className={styles.HeaderNav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Acceuil
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
