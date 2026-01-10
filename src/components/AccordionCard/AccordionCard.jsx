import styles from "./AccordionCard.module.css";
function AccordionCard({ icon, title, content }) {
  return (
    <div className={styles.container}>
      <details className={styles.details}>
        <summary className={styles.summary}>
          <div className={styles.iconContainer}>{icon}</div>
          <span>{title}</span>
        </summary>
      </details>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default AccordionCard;
