import React from "react";
import styles from "../Header/styles.module.css";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <div className={styles.HeaderWrap}>
      
        <img className={styles.HeaderImg} src={logo} alt="La Kasa" />
        <nav className={styles.HeaderNav}>
          <a href="*">Acceuil</a>
          <a href="*">A Propos</a>
        </nav>
    </div>
  );
}

export default Header;
