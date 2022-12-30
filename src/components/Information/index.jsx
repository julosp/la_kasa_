import React from "react";
import styles from "../Information/styles.module.css";
import Rating from "../Rating/index.jsx";

function Information(props) {
  const title = props.title;
  const location = props.location;
  const equipments = props.equipments;
  const hostName = props.name;
  const hostPicture = props.picture;
  const rating = props.rating;

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
        <Rating rating={rating} />
      </div>
    </section>
  );
}

export default Information;

/*<p>&#9733;</p>*/