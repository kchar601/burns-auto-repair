import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./TestimonialsCarousel.module.css";
import testimonials from "./testimonials.json";

export default function TestimonialsCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What Our Customers Say</h2>
      <p>
        Don't just take our word for it. Here's what our satisfied customers
        have to say.
      </p>
      <div className={styles.carouselWrapper}>
        <button ref={prevRef} className={styles.navBtn}>
          ‹
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.swiperContainer}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <strong>{t.name}</strong>
                <div>{renderStars(t.rating)}</div>
                <p>{t.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextRef} className={styles.navBtn}>
          ›
        </button>
      </div>
    </section>
  );
}

function renderStars(count) {
  return Array.from({ length: 5 }).map((_, i) => (
    <span
      key={i}
      style={{ color: i < count ? "#facc15" : "#e5e7eb", fontSize: "24px" }}
    >
      ★
    </span>
  ));
}
