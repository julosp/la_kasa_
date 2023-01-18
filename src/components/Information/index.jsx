/*REACT AND STYLES IMPORT*/
import React from "react";
import styles from "../Information/styles.module.css";
/*COMPONENTS IMPORT*/
import Rating from "../Rating/index.jsx";

/*INFORMATION COMPONENTS*/
function Information(props) {
  /*GET PROPS*/
  const title = props.title;
  const location = props.location;
  const equipments = props.equipments;
  const hostName = props.name;
  const hostPicture = props.picture;
  const rating = props.rating;
  /*DISPLAY EQUIPMENT AS LIST*/
  const equipmentsList = equipments.map((equipment) => (
    <li key={equipment}>{equipment}</li>
  ));

  return (
    <section className={styles.infoWrap}>
      <div className={styles.infoLeft}>
        <h2>{title}</h2>
        <p>{location}</p>
        <ul>{equipmentsList}</ul>
      </div>
      <div className={styles.infoRight}>
        <div className={styles.infoHost}>
          <p> {hostName} </p>
          <img src={hostPicture} alt="Host" />
        </div>
        <div className={styles.rating}>
          <Rating rating={rating} />
        </div>
      </div>
    </section>
  );
}

export default Information;
