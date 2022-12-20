import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../Card/styles.module.css";

function Card({ id, cover, title }) {
  return (
    <div className={styles.CardDiv}>
      <NavLink to={"/logement/" + id}>
        <img src={cover} alt={title} style={styles.CardImg} />
        <p className={styles.CardTitle}>{title}</p>
      </NavLink>
    </div>
  );
}
export default Card;
