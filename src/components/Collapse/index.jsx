import React, { useState, useEffect, useRef } from "react";

import styles from "../../components/Collapse/styles.module.css"
import arrow from "../../assets/img/arrow.png"

function Collapse(props) {
  const title = props.title;
  const text = props.text;

  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.collapseWrap}>
      <button className={styles.collapseVisible} onClick={toggleState}>
        <span>test</span>
        <img src={arrow} alt="arrow" className={toggle && "active"}/>
      </button>
      <div
        className={toggle ? `${styles.collapseToggle} ${styles.animated}` : `${styles.collapseToggle}`}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis
          quaerat quis deleniti perspiciatis magni sequi in laborum? Pariatur,
          aperiam! Illum ullam id provident veritatis eveniet tempore laborum
          dolor consequatur?
        </p>
      </div>
    </div>
  );
}

export default Collapse;
