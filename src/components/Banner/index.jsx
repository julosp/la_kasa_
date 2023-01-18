/*IMPORT USEEFFET USESTATE USELOCATION AND STYLES*/

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styles from "../Banner/styles.module.css";

/*BANNER COMPONENTS*/
function Banner(props) {
  /*GET IMG AND TEXT FROM PROPS*/
  const img = props.img;
  const text = props.text;
  /*GET LOCATION*/
  const location = useLocation();
  /*SET STYLE BY DEFAULT*/
  const [className, setClassName] = useState(styles.TitleWrap);

  /*USEEFFET, IF LOCATION === ABOUTUS PAGE THEN CHANGE STYLE*/
  useEffect(() => {
    if (location.pathname === "/aboutus") {
      setClassName(styles.aboutus);
    } else {
      setClassName(styles.TitleWrap);
    }
  }, [location]);

  
  return (
    <div className={className}>
      <img className={styles.TitleImg} src={img} alt="Banner" />
      <p className={styles.TitleText}> {text} </p>
    </div>
  );
}

export default Banner;
