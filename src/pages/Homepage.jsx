import HeroSection from "./../components/HeroSection";
import FeaturedServices from "./../components/FeaturedServices";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.home}>
      <HeroSection />
      <FeaturedServices />
      Burns Auto Repair
    </div>
  );
}

export default Homepage;
