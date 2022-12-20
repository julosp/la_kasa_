import React from "react";
import styles from "../Error/styles.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Error() {
  return (
    <>
      <Header />
      <div className={styles.errorWrap}>
        <h1 className={styles.errorTitle}>404</h1>
        <p className={styles.errorText}>
          Oups La page que vous demandez n'existe pas.
        </p>
        <a href="/" className={styles.errorLink}>
          Retourner sur la page d'acceuil
        </a>
      </div>
      <Footer />
    </>
  );
}
