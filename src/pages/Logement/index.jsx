/* REACT AND STYLES IMPORT*/
import React from "react";
import styles from "../Logement/styles.module.css";
/* DATA IMPORT*/
import data from "../../components/data/logement.json";
/* ERROR IMPORT*/
import Error from "../Error/";
/* COMPONENTS IMPORT*/
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import Information from "../../components/Information";
import Collapse from "../../components/Collapse";

/* LOGEMENT PAGE*/
function Logement() {
  /* GET ID FROM URL*/
  const flatData = data;
  let id = window.location.pathname.split("/logement/");
  id = id[1];
  /* IF ID FROM URL === ID IN DATA, RETURN THE ITEM ELSE GO TO ERROR PAGE*/
  const flat = flatData.find((item) => item.id === id);
  if (!flat) return <Error />;
  return (
    <>
      {/* HEADER*/}
      <Header />

      <div className={styles.GlobalWrap}>
        {/* CAROUSELLE*/}
        <Slider key={id} img={flat.pictures} />
        {/* FLAT INFORMATION*/}
        <Information
          title={flat.title}
          location={flat.location}
          equipments={flat.equipments}
          name={flat.host.name}
          picture={flat.host.picture}
          rating={flat.rating}
        />
        {/* COLLAPSE*/}
        <div className={styles.SectionWrap}>
          <section className={styles.Section}>
            <Collapse title="Description" text={flat.description}></Collapse>
          </section>
          <section className={styles.Section}>
            <Collapse title="Équipements" text={flat.equipments}></Collapse>
          </section>
        </div>
      </div>
      {/* FOOTER*/}
      <Footer />
    </>
  );
}

export default Logement;

/*const flat = data.find((obj) => {
    if (obj.id === id) {
      return obj;
    }
  });*/
