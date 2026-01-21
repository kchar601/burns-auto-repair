import testimonials from "../../data/testimonials.json";
import styles from "./ReviewList.module.css";
import renderStars from "./../TestimonialsCarousel/RenderStars";

function ReviewList() {
  return (
    <section className={styles.container}>
      {sortedTestimonials.map((t, i) => (
        <div key={i} className={styles.card}>
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

const sortedTestimonials = [...testimonials].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export default ReviewList;
