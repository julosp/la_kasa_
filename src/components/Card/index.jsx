/*LINK AND STYLES IMPORT*/
import { Link } from "react-router-dom";
import styles from "../Card/styles.module.css";

/*CARD COMPONENTS*/
function Card({ id, cover, title }) {
  return (
    <div className={styles.CardDiv}>
      <Link to={"logement/" + id}>
        <img src={cover} alt={title} style={styles.CardImg} />
        <p className={styles.CardTitle}>{title}</p>
      </Link>
    </div>
  );
}
export default Card;
