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
            <div key={i} className={styles.card}>
              <div className={styles.flexApart}>
                <div className={styles.nameLine}>
                  <span className={styles.custName}>{t.name}</span>
                  <span>{t.date}</span>
                </div>
                <a className={styles.reviewLink} href={t.link} target="_blank">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
            icon={<i className="fa-solid fa-chevron-down"></i>}
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
