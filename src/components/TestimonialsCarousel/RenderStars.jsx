import styles from "./TestimonialsCarousel.module.css";

export default function renderStars(count) {
  return Array.from({ length: 5 }).map((_, i) => (
    <span
      key={i}
      className={styles.stars}
      style={{ color: i < count ? "#facc15" : "#e5e7eb" }}
    >
      ★
    </span>
  ));
}
