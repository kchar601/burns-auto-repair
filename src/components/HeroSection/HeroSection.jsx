import CtaLink from "../CtaLink/CtaLink";
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/shopzoomed.jpg";
import noBreak from "./../../hooks/noBreak.module.css";
import aseImg from "./../../assets/ASE-Logo_190312_132616.png";
import bumperImg from "./../../assets/bumper2bumper.png";
import confidencePlus from "./../../assets/confidencePlus.png";
import shell from "./../../assets/Shell_logo.svg.png";

function HeroSection() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1>
            Newtown's Most Trusted{" "}
            <span className={noBreak.noBreak}>Garage Since 1957</span>
          </h1>
          <p>
            From our family to yours—we don't just fix cars; we keep our
            neighbors safe on the road. Experience the peace of mind that comes
            with a mechanic you can actually trust.
          </p>
          <span>
            <CtaLink link="Tel: (215) 968-3791">Schedule Service</CtaLink>
          </span>
        </div>
        <img className={styles.heroImg} src={heroImage} />
      </div>
      <div className={styles.banner}>
        <div>
          <img src={aseImg} loading="lazy" />
          <h5>ASE Certified Technicians</h5>
        </div>
        <div>
          <img src={bumperImg} loading="lazy" />
          <h5>Certified Parts</h5>
        </div>
        <div>
          <img src={confidencePlus} loading="lazy" />
          <h5>Certified Service</h5>
        </div>
        <div>
          <img src={shell} loading="lazy" />
          <h5>Premium Gasoline</h5>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
