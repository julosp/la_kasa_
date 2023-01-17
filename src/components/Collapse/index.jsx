import React, { useState, useEffect, useRef } from "react";

import styles from "../../components/Collapse/styles.module.css";
import arrow from "../../assets/img/arrow.png";

function Collapse(props) {
  const title = props.title;
  const text = props.text;

  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}%`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };


  let content;
  if(Array.isArray(text) && text.length>0){
    content = (
      <ul>
        {text.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
  } else {
    content = <p>{text}</p>
  }

  return (
    <div className={styles.collapseWrap}>
      <button className={styles.collapseVisible} onClick={() => toggleState()}>
        <span>{title}</span>
        <img src={arrow} alt="arrow" className={toggle && `${styles.active}`} />
      </button>
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
