import CtaLink from "./CtaLink";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1>Keeping Newtown Moving Since 1964</h1>
        <p>
          We don't just fix cars; we serve neighbors. Experience the difference
          of a family-run shop that has been a staple of the Newtown community
          since 1964.
        </p>
        <span>
          <CtaLink link="Tel: (215) 968-3791">Schedule Service</CtaLink>
        </span>
      </div>
      <img className={styles.heroImg} src="src\assets\shopzoomed.jpg" />
    </div>
  );
}

export default HeroSection;
