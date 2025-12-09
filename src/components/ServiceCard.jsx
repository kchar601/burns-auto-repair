import styles from "./ServiceCard.module.css";
function ServiceCard({ icon, cardTitle, subTitle }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>{icon}</div>
      <h5>{cardTitle}</h5>
      <p>{subTitle}</p>
    </div>
  );
}

export default ServiceCard;
