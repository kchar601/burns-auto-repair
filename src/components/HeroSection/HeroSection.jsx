import CtaLink from "../CtaLink/CtaLink";
import styles from "./HeroSection.module.css";
import heroImage from "../../assets/shopzoomed.webp";
import noBreak from "./../../hooks/noBreak.module.css";
import aseImg from "./../../assets/ASE-Logo_190312_132616.webp";
import bumperImg from "./../../assets/bumper2bumper.webp";
import confidencePlus from "./../../assets/confidencePlus.webp";
import shell from "./../../assets/Shell_logo.svg.webp";

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
        <img
          className={styles.heroImg}
          src={heroImage}
          alt="Burns Auto Repair garage exterior in Newtown, PA"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className={styles.banner}>
        <div>
          <img
            src={aseImg}
            alt="ASE Certified logo"
            loading="lazy"
            decoding="async"
          />
          <p>ASE Certified Technicians</p>
        </div>
        <div>
          <img
            src={bumperImg}
            alt="Bumper to Bumper certified parts logo"
            loading="lazy"
            decoding="async"
          />
          <p>Certified Parts</p>
        </div>
        <div>
          <img
            src={confidencePlus}
            alt="Confidence Plus certified service logo"
            loading="lazy"
            decoding="async"
          />
          <p>Certified Service</p>
        </div>
        <div>
          <img
            src={shell}
            alt="Shell gasoline logo"
            loading="lazy"
            decoding="async"
          />
          <p>Premium Gasoline</p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
