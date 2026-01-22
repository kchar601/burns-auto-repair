import styles from "./RatingDisplay.module.css";

function RatingDisplay() {
  return (
    <div className={styles.container}>
      <div className={styles.ratingContainer}>
        <span className={styles.stars}>★★★★★</span>
        <span className={styles.rating}>5.0</span>
      </div>
      <p className={styles.subRating}>Based on 1400+ customer reviews</p>
      <a
        target="_blank"
        href="https://www.surecritic.com/reviews/burns-auto-repair-inc?nhd=1"
      >
        <img
          src="src\assets\SURECRITIC.png"
          alt="Burns Auto Repair  Reviews"
          width="240px"
        />
      </a>
    </div>
  );
}

export default RatingDisplay;
