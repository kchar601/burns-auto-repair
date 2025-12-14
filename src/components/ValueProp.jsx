import styles from "./ValueProp.module.css";
import CtaLink from "./CtaLink";

function ValueProp() {
  return (
    <div className={styles.container}>
      <img className={styles.imageColumn} src="src\assets\shop-upclose.jpeg" />
      <div className={styles.textColumn}>
        <h2>Why Choose Burns Auto Repair?</h2>
        <p>
          Since 1998, ProAuto Repair has been the trusted choice for automotive
          service and repair in the community. Our team of certified technicians
          combines decades of experience with the latest diagnostic technology.
        </p>
        <ul>
          <li>50 Years of Serving Newtown</li>
          <li>Family Owned & Operated</li>
          <li>Honest & Transparent Pricing</li>
          <li>ASE Certified Technicians</li>
        </ul>
        <CtaLink link={"/about"}>Learn More About Us</CtaLink>
      </div>
    </div>
  );
}

export default ValueProp;
