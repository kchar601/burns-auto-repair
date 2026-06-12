import styles from "./ServiceCard.module.css";
function ServiceCard({ icon, cardTitle, outline, children }) {
  return (
    <div className={`${styles.cardContainer} ${outline && styles.outline}`}>
      <div className={styles.iconContainer}>{icon}</div>
      <h3>{cardTitle}</h3>
      <p>{children}</p>
    </div>
  );
}

export default ServiceCard;
