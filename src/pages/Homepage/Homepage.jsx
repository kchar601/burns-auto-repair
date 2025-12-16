import { useEffect } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices";
import styles from "./Homepage.module.css";
import ValueProp from "../../components/ValueProp/ValueProp";
import TestimonialsCarousel from "../../components/TestimonialsCarousel/TestimonialsCarousel";

function Homepage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//www.surecritic.com/businesses/32834/plugins/review_rotator_plugins/7674.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className={styles.home}>
      <HeroSection />
      <FeaturedServices />
      <TestimonialsCarousel />
      <ValueProp />
      <div id="surecritic-carousel-reviews"></div>
    </div>
  );
}

export default Homepage;
