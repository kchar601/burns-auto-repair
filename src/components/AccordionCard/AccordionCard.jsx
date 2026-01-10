import styles from "./AccordionCard.module.css";
function AccordionCard({ title, content }) {
  return (
    <div>
      <details className={styles.details}>
        <summary className={styles.summary}>
          <span>{title}</span>
        </summary>
      </details>
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default AccordionCard;
