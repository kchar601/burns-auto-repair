import { useState } from "react";
import styles from "./TestimonialsCarousel.module.css";

const testimonials = [
  {
    name: "Akshay Kumar",
    rating: 4,
    text: "When it comes to booking a holiday, we know everyone likes something different so we've designed our getaways with you in mind.",
  },
  {
    name: "Raima Shen",
    rating: 4,
    text: "Our experiences have developed many times throughout history when one or more risks have emerged for a banking sector as a whole.",
  },
  {
    name: "Jordan Lee",
    rating: 5,
    text: "Fantastic service. Honest work, fair pricing, and they explained everything clearly before starting the repair.",
  },
  {
    name: "Chris Walker",
    rating: 5,
    text: "I wouldn’t trust my car with anyone else. Quick turnaround and very professional staff.",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const visibleCards = window.innerWidth < 768 ? 1 : 2;
  const maxIndex = testimonials.length - visibleCards;

  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <p className={styles.subtitle}>
        Don't just take our word for it. Here's what our satisfied customers
        have to say.
      </p>

      <div className={styles.carouselWrapper}>
        <button onClick={prev} className={styles.navBtn} disabled={index === 0}>
          ‹
        </button>

        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardHeader}>
                  <strong>{t.name}</strong>
                  <div>{renderStars(t.rating)}</div>
                </div>
                <p className={styles.text}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className={styles.navBtn}
          disabled={index === maxIndex}
        >
          ›
        </button>
      </div>
    </section>
  );
}

/**
 * Star renderer
 */
function renderStars(count) {
  return Array.from({ length: 5 }).map((_, i) => (
    <span
      key={i}
      style={{ color: i < count ? "#facc15" : "#e5e7eb", fontSize: "32px" }}
    >
      ★
    </span>
  ));
}
