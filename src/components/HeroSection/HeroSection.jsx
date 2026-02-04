import CtaLink from "../CtaLink/CtaLink";
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/shopzoomed.jpg";

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1>Newtown's Most Trusted Garage Since 1957</h1>
        <p>
          From our family to yours—we don't just fix cars; we keep our neighbors
          safe on the road. Experience the peace of mind that comes with a
          mechanic you can actually trust.
        </p>
        <span>
          <CtaLink link="Tel: (215) 968-3791">Schedule Service</CtaLink>
        </span>
      </div>
      <img className={styles.heroImg} src={heroImage} />
    </div>
  );
}

export default HeroSection;
