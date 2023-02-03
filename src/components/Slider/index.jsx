/*REACT, ARROW AND STYLES IMPORT*/
import { useState, useEffect } from "react";
import styles from "../Slider/styles.module.css";
import arrow from "../../assets/img/arrow.png";
/*SLIDER COMPONENTS*/
function Slider(props) {
  /*GET PROPS*/
  let image = props.img;
  /*SET USESTATE TO 0*/
  let [currImg, setCurrImg] = useState(0);
  /*SET EVENT*/
  let event = true;

  const [uniqueImg, setUniqueImg] = useState(false);
  useEffect(function imgCounter() {
    if (image.length === 1) {
      console.log("true");
      setUniqueImg(true);
    } else {
      console.log("false");
    }
  });

  /*HANDLE CLICK ON LEFT ARROW*/
  const handleclickLeft = (e) => {
    /*IF USER ON FIRST IMAGE AND CLICK ON LEFT ARROW, DISPLAY LAST IMAGE OF ARRAY*/
    if (currImg === 0) {
      let last = image.length - 1;
      setCurrImg((currImg = last));
    } else {
      /*ELSE GO TO PREVIOUS IMAGE*/
      setCurrImg(currImg - 1);
    }
  };
  /*HANDLE CLICK ON RIGHT ARROW*/
  const handleclickRight = (e) => {
    let last = image.length - 1;
    /*IF USER ON LAST IMAGE AND CLICK ON RIGHT ARROW, DISPLAY FIRST IMAGE OF ARRAY*/
    if (currImg === last) {
      setCurrImg((currImg = 0));
    } else {
      /*ELSE GO TO NEXT IMAGE*/
      setCurrImg(currImg + 1);
    }
  };

  return (
    <section className={styles.carouselWrap}>
      {uniqueImg ? (
        <div
          className={styles.carouselInner}
          style={{ backgroundImage: `url(${image[currImg]})` }}
        ></div>
      ) : (
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
      )}
    </section>
  );
}

export default Slider;
