import styles from "./ServiceCard.module.css";
function ServiceCard({ icon, cardTitle, children }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>{icon}</div>
      <h5>{cardTitle}</h5>
      <p>{children}</p>
    </div>
  );
}

export default ServiceCard;
