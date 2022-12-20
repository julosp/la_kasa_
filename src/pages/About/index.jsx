import React from "react";
import styles from "../About/styles.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";

import img_banner from "../../assets/img/aboutus_background.png";

function AboutUs() {
  return (
    <>
      <Header />
      <div className={styles.GlobalWrap}>
        <Banner text="" img={img_banner} />
        <Collapse />
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
