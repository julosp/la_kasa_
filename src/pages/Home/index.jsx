import React from "react";
import data_logement from "../../components/data/logement.json";

import styles from "../Home/styles.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <div>
        <p> Chez Vous, partout et ailleurs</p>
      </div>
      <div>
        {data_logement.map(({ id, title, cover }) => (
          <div key={id}>
            <img src={cover} alt={title} />
            <p>{title}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
