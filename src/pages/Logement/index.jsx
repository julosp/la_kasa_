import React from "react";
import data from "../../components/data/logement.json";
import styles from "../Logement/styles.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Information from "../../components/Information";
import Collapse from "../../components/Collapse";

function Logement() {
  let id = window.location.pathname.split("/logement/");
  id = id[1];

  const flat = data.find((obj) => {
    if (obj.id === id) {
      return obj;
    }
  });

  return (
    <>
      <Header />
      <div className={styles.GlobalWrap}>
        <Slider key={id} img={flat.pictures} />

        <Information
          title={flat.title}
          location={flat.location}
          equipments={flat.equipments}
          name={flat.host.name}
          picture={flat.host.picture}
          rating={flat.rating}
        />
        <Collapse title="Description" text={flat.description}></Collapse>
        <Collapse title="Équipements" text={flat.equipments}></Collapse>
      </div>
      <Footer />
    </>
  );
}

export default Logement;
