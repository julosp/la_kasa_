import React, { useState } from "react";
import styles from "../Slider/styles.module.css";
import arrow from "../../assets/img/arrow.png";

function Slider(props) {
  let image = props.img;

  let [currImg, setCurrImg] = useState(0);

  let event = true;
  const handleclickLeft = (e) => {
    if (currImg === 0) {
      let last = image.length - 1;
      setCurrImg((currImg = last));
    } else {
      setCurrImg(currImg - 1);
    }
  };

  const handleclickRight = (e) => {
    let last = image.length - 1;
    if (currImg === last) {
      setCurrImg((currImg = 0));
    } else {
      setCurrImg(currImg + 1);
    }
  };

  return (
    <section className={styles.carouselWrap}>
      <div
        className={styles.carouselInner}
        style={{ backgroundImage: `url(${image[currImg]})` }}
      >
        <div
          className={styles.leftArrow}
          onClick={event ? handleclickLeft : undefined}
        >
          <img src={arrow} alt="left" />
        </div>
        <div className={styles.carouselCounter}>
          <p>
            {currImg + 1} / {image.length}
          </p>
        </div>
        <div
          className={styles.rightArrow}
          onClick={event ? handleclickRight : undefined}
        >
          <img src={arrow} alt="left" />
        </div>
      </div>
    </section>
  );
}

export default Slider;
