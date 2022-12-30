import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "../Rating/styles.module.css";

const Rating = (props) => {
  const rating = props.rating;
  const [rate, setRate] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + { rating };
        return (
          <label>
            <input
              type="radio"
              name="rating"
              className={styles.radio}
              value={ratingValue}
              onClick={() => setRate(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue < (hover || rate) ? "#ff6060" : "#e4e5e9"}
              size={50}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
