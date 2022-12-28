import React from "react";
import data from "../../components/data/logement.json";
import styles from "../Logement/styles.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";

function Logement() {
  let id = window.location.pathname.split("/logement/");
  id = id[1];

  const flat = data.find((obj) => {
    if (obj.id === id) {
      return obj;
    }
  });
  const img = flat.pictures;

  return (
    <>
      <Header />
      <div className={styles.GlobalWrap}>
        <Slider key={id} img={img}/>
      </div>
      <Footer />
    </>
  );
}

export default Logement;
