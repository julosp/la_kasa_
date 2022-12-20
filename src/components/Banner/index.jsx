import React from "react";
import styles from "../Banner/styles.module.css"

function Banner(props) {
  const img = props.img;
  const text = props.text

  return (
    <div className={styles.TitleWrap}>
      <img className={styles.TitleImg} src={img} alt="Banner"/> 
      <p className={styles.TitleText}> {text} </p>
    </div>
  );
}

export default Banner;
