import testimonials from "../../data/testimonials.json";
import styles from "./ReviewList.module.css";
import renderStars from "./../TestimonialsCarousel/RenderStars";
import CtaLink from "./../CtaLink/CtaLink";

function ReviewList() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.reviewsContent}>
          {sortedTestimonials.map((t, i) => (
            <div key={t.link || `${t.name}-${t.date}-${i}`} className={styles.card}>
              <div className={styles.flexApart}>
                <div className={styles.nameLine}>
                  <span className={styles.custName}>{t.name}</span>
                  <span>{t.date}</span>
                </div>
                <a
                  className={styles.reviewLink}
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon-svg"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"/></svg>
                </a>
              </div>
              <div>{renderStars(t.rating)}</div>
              <p className={styles.cardHeader}>{t.title}</p>

              <p className={styles.body}>{t.text}</p>
            </div>
          ))}
        </div>
        <span className={styles.seeAll}>
          <CtaLink
            altColor
            iconEnd
            icon={<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon-svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>}
            link={"https://www.surecritic.com/reviews/burns-auto-repair-inc"}
            targetBlank
          >
            See All Reviews
          </CtaLink>
        </span>
      </section>
    </>
  );
}

const sortedTestimonials = [...testimonials].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);

export default ReviewList;
