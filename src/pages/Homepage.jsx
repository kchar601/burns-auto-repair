import HeroSection from "./../components/HeroSection";
import FeaturedServices from "./../components/FeaturedServices";
import styles from "./Homepage.module.css";
import ValueProp from "./../components/ValueProp";

function Homepage() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <FeaturedServices />
      <ValueProp />
    </div>
  );
}

export default Homepage;
