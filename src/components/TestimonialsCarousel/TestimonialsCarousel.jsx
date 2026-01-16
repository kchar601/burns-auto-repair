import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../swiper-navigation.css";
import styles from "./TestimonialsCarousel.module.css";
import testimonials from "../../data/testimonials.json";

export default function TestimonialsCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <p>
        Don't just take our word for it. Here's what our satisfied customers
        have to say.
      </p>
      <div className={styles.carouselWrapper}>
        <a
          target="_blank"
          href="https://www.surecritic.com/reviews/burns-auto-repair-inc?nhd=1"
        >
          <img
            src="https://www.surecritic.com/assets/business_badge.png"
            alt="Burns Auto Repair  Reviews"
          />
        </a>
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          navigation
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.swiperContainer}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.flexApart}>
                  <span className={styles.custName}>{t.name}</span>
                  <span>{t.date}</span>
                </div>
                <div>{renderStars(t.rating)}</div>
                <p className={styles.cardHeader}>{t.title}</p>

                <p>{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function renderStars(count) {
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
