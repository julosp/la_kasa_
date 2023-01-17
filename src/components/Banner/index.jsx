import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styles from "../Banner/styles.module.css";

function Banner(props) {
  const img = props.img;
  const text = props.text;

  const location = useLocation();
  const [className, setClassName] = useState(styles.TitleWrap);

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
