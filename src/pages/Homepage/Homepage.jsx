import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices";
import styles from "./Homepage.module.css";
import ValueProp from "../../components/ValueProp/ValueProp";
import TestimonialsCarousel from "../../components/TestimonialsCarousel/TestimonialsCarousel";
import CtaLink from "../../Components/CtaLink/CtaLink";

function Homepage() {
  return (
    <main className={styles.home}>
      <HeroSection />
      <FeaturedServices outline={false} />
      <TestimonialsCarousel />
      <ValueProp img={"src/assets/shop-upclose.jpeg"}>
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
      </ValueProp>
    </main>
  );
}

export default Homepage;
