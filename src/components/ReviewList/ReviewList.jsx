import testimonials from "../../data/testimonials.json";
import styles from "./ReviewList.module.css";

function ReviewList() {
  return (
    <section className={styles.container}>
      {testimonials.map((t, i) => (
        <div className={styles.card}>
          <div className={styles.flexApart}>
            <span className={styles.custName}>{t.name}</span>
            <span>{t.date}</span>
          </div>
          <div>{renderStars(t.rating)}</div>
          <p className={styles.cardHeader}>{t.title}</p>

          <p>{t.text}</p>
        </div>
      ))}
    </section>
  );
}

export default ReviewList;
