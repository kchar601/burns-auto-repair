import styles from "./RatingDisplay.module.css";
import sureCriticLogo from "../../assets/SURECRITIC.png";

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
        rel="noopener noreferrer"
      >
        <img
          src={sureCriticLogo}
          alt="Burns Auto Repair reviews"
          width={240}
          height={57}
          decoding="async"
        />
      </a>
    </div>
  );
}

export default RatingDisplay;
