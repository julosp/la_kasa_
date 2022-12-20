import React from "react";
import logo from "../../assets/img/logo_white.png"
import styles from "../Footer/styles.module.css"

function Footer() {
  return (
    <footer className={styles.FooterWrap}>
      <img src={logo} alt="La Kasa" className={styles.FooterImg}/>
      <p className={styles.FooterText}> 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
