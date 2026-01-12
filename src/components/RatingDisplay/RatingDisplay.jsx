import styles from "./RatingDisplay.module.css";

function RatingDisplay() {
  return (
    <div className={styles.container}>
      <div className={styles.ratingContainer}>
        <span className={styles.stars}>★★★★★</span>
        <span className={styles.rating}>4.98</span>
      </div>
      <p className={styles.subRating}>Based on over 1300 customer reviews</p>
    </div>
  );
}

export default RatingDisplay;
