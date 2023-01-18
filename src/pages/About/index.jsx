/*REACT AND STYLES IMPORT*/
import React from "react";
import styles from "../About/styles.module.css";
/*COMPONENTS IMPORT*/
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
/*IMG BANNER IMPORT*/
import img_banner from "../../assets/img/aboutus_background.png";

/*ABOUT US PAGE*/
function AboutUs() {
  return (
    <>
      {/*HEADER*/}
      <Header />
      <div className={styles.GlobalWrap}>
        {/*BANNER*/}
        <Banner text="" img={img_banner} />
        {/*COLLAPSE WITH TITLE AND TEXT*/}
        <Collapse
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les stadards sont bien respectés. Nous organisos également des atelers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      {/*FOOTER*/}
      <Footer />
    </>
  );
}

export default AboutUs;
