import React, { useState } from "react";
import { TiStar } from "react-icons/ti";

const Rating = (props) => {
  const rating = props.rating;
  let test = rating.toString();
  const [rate, setRate] = useState(test);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + { test };
        return (
          <TiStar
            className="star"
            color={ratingValue < rate ? "#ff6060" : "#e4e5e9"}
            size={20}
          />
        );
      })}
    </div>
  );
};

export default Rating;
