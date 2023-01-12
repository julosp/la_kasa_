import React, { useState } from "react";
import { TiStar } from "react-icons/ti";
import styles from "../Rating/styles.module.css";

const Rating = (props) => {
  const rating = props.rating;
  let test = rating.toString();
  const [rate] = useState(test);

  return (
    <div className={styles.test}>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + { test };
        return (
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
