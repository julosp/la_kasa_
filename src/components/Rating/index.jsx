/*REACT, STAR AND STYLES IMPORT*/
import React, { useState } from "react";
import { TiStar } from "react-icons/ti";
import styles from "../Rating/styles.module.css";
/*RATIGN COMPONENTS*/
const Rating = (props) => {
  /*GET PROPS RATING*/
  const rating = props.rating;
  /*CONVERT PROPS TO STRING*/
  let star = rating.toString();
  /*MAKE THE STRING AS DEFAULT VALUE*/
  const [rate] = useState(star);

  return (
    <div className={styles.test}>
      {/*CREATE AN ARRAY OF 5*/}
      {[...Array(5)].map((star, i) => {
        /*SET RATING VALUE TO STAR*/
        const ratingValue = i + { star };
        return (
          /*VALUE OF RATING ORANGE ELSE GRAY*/
          <TiStar
            className={styles.star}
            color={ratingValue < rate ? "#ff6060" : "#e4e5e9"}
            size={"20"}
          />
        );
      })}
    </div>
  );
};

export default Rating;
