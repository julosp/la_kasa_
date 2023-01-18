/*REACT, STYLES AND ARROW IMPORT*/
import { useState, useEffect, useRef } from "react";
import styles from "../../components/Collapse/styles.module.css";
import arrow from "../../assets/img/arrow.png";
/*COLLAPSE COMPONENTS*/
function Collapse(props) {
  /*GET TITLE AND TEXT FROM PROPS*/
  const title = props.title;
  const text = props.text;
  /*SET TOGGLE AND HEIGHT STATE*/
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  /*USE REF FOR THE HEIGHT*/
  const refHeight = useRef();
  /*USE EFFET => CHANGE THE HEIGHT OF THE ELEMENT IN REF OF IS SCROLL HEIGHT*/
  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}%`);
  }, []);
  /*SET TOGGLE TO TRUE OR FALSE*/
  const toggleState = () => {
    setToggle(!toggle);
  };
  /*DISPLAY TEXT AS LIST IF PROPS TEXT IS AN ARRAY*/
  let content;
  if (Array.isArray(text) && text.length > 0) {
    content = (
      <ul>
        {text.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
    /*ELSE DISPLAY IT AS A TEXT*/
  } else {
    content = <p>{text}</p>;
  }

  return (
    <div className={styles.collapseWrap}>
      {/*ON CLICK ON THE BUTTON, CHANGE THE TOGGLE TO TRUE IF FALSE OR FALSE IF TRUE*/}
      <button className={styles.collapseVisible} onClick={() => toggleState()}>
        <span>{title}</span>
        <img src={arrow} alt="arrow" className={toggle && `${styles.active}`} />
      </button>
      {/*CONTENT OF PROPS TEXT, IF TOGGLE TRUE => ANIMATION AND SET THE HEIGHT IN REF OF TEXT SIZE, ELSE THE HEIGHT IS EQUAL TO 0PX*/}
      <div
        className={
          toggle
            ? `${styles.collapseToggle} ${styles.animated}`
            : `${styles.collapseToggle}`
        }
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        {content}
      </div>
    </div>
  );
}

export default Collapse;
