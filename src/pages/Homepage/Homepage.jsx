import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices";
import ValueProp from "../../components/ValueProp/ValueProp";
import TestimonialsCarousel from "../../components/TestimonialsCarousel/TestimonialsCarousel";
import CtaLink from "../../components/CtaLink/CtaLink";
import shopUpclosImage from "../../assets/shop-upclose.jpeg";
import styles from "../../components/ValueProp/ValueProp.module.css";

function Homepage() {
  return (
    <main>
      <HeroSection />
      <FeaturedServices outline={true} />

      <ValueProp img={shopUpclosImage}>
        <h2>Our Integrity Speaks for Itself</h2>
        <p>
          We know the anxiety that comes with visiting an auto repair shop: "Do
          I really need this part? Are they overcharging me?" At Burns' Auto
          Repair, our customers' trust and satisfaction is what drives our
          Business.
        </p>
        <ul className={styles.home}>
          <li className={styles.check}>
            Nearly 70 Years of Serving Our Community
          </li>
          <li className={styles.check}>Family Owned & Operated</li>
          <li className={styles.check}>Honest & Transparent Pricing</li>
          <li className={styles.check}>ASE Certified Technicians</li>
        </ul>
        <CtaLink link={"/about"}>Learn More About Us</CtaLink>
      </ValueProp>
      <TestimonialsCarousel />
    </main>
  );
}

export default Homepage;
