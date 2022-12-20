import React from "react";
import styles from "../Home/styles.module.css";

import data_logement from "../../components/data/logement.json";
import img_banner from "../../assets/img/title_background.png";


import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.GlobalWrap}>
        <Banner text="Chez vous, partout et ailleurs" img={img_banner}/>
        <div className={styles.CardWrap}>
          {data_logement.map(({ id, title, cover }) => (
            <Card key={id} id={id} title={title} cover={cover} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
