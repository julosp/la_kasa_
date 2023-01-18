/*REACT AND STYLES IMPORT*/
import React from "react";
import styles from "../Home/styles.module.css";

/*DATA AND IMG IMPORT*/
import data_logement from "../../components/data/logement.json";
import img_banner from "../../assets/img/title_background.png";

/*COMPONENTS IMPORT*/
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

/*HOME PAGE*/
function Home() {
  return (
    <>
      {/*HEADER*/}
      <Header />
      <div className={styles.GlobalWrap}>
        {/*BANNER*/}
        <Banner text="Chez vous, partout et ailleurs" img={img_banner} />
        {/*LOOP THROUGT DATA TO DISPLAY ALL FLAT AS CARD*/}
        <div className={styles.CardWrap}>
          {data_logement.map(({ id, title, cover }) => (
            <Card key={id} id={id} title={title} cover={cover} />
          ))}
        </div>
      </div>
      {/*FOOTER*/}
      <Footer />
    </>
  );
}

export default Home;
