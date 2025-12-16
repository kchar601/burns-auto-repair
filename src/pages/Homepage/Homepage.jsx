import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices";
import styles from "./Homepage.module.css";
import ValueProp from "../../components/ValueProp/ValueProp";
import TestimonialsCarousel from "../../components/TestimonialsCarousel/TestimonialsCarousel";

function Homepage() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <FeaturedServices />
      <ValueProp />
      <TestimonialsCarousel />
    </div>
  );
}

export default Homepage;
