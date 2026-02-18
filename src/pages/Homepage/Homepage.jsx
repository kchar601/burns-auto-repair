import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices";
import ValueProp from "../../components/ValueProp/ValueProp";
import TestimonialsCarousel from "../../components/TestimonialsCarousel/TestimonialsCarousel";
import CtaLink from "../../components/CtaLink/CtaLink";
import shopUpcloseImage from "../../assets/shop-upclose.webp";
import styles from "../../components/ValueProp/ValueProp.module.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { Helmet } from "react-helmet";

function Homepage() {
  return (
    <main>
      <Helmet>
        <title>Auto Repair & Mechanics in Newtown, PA | Burns' Auto Repair</title>
        <meta
          name="description"
          content="Family-owned Burns' Auto Repair in Newtown, PA offers ASE-certified mechanics, honest diagnostics, and dependable maintenance and repair since 1957."
        ></meta>
      </Helmet>
      <HeroSection />
      <FeaturedServices
        CTALink={<CtaLink link="/services">View All Services</CtaLink>}
      >
        <ServiceCard
          icon={<i className="fa-solid fa-wrench"></i>}
          cardTitle={"General Repairs"}
          outline
        >
          From minor fixes to major repairs, we handle all your automotive
          needs.
        </ServiceCard>
        <ServiceCard
          cardTitle={"Engine Diagnostics"}
          icon={<i className="fa-solid fa-gauge-high"></i>}
          outline
        >
          Advanced diagnostic tools to identify and resolve engine issues
        </ServiceCard>
        <ServiceCard
          cardTitle={"Oil Changes"}
          icon={<i className="fa-solid fa-droplet"></i>}
          outline
        >
          Regular maintenance to keep your engine running smoothly.
        </ServiceCard>
        <ServiceCard
          icon={<i className="fa-solid fa-car-battery"></i>}
          cardTitle={"Electrical Systems"}
          outline
        >
          Expert repair of batteries, alternators, and electrical components.
        </ServiceCard>
      </FeaturedServices>

      <ValueProp
        img={shopUpcloseImage}
        imgAlt="Technician working on a vehicle at Burns Auto Repair"
      >
        <h2>Our Integrity Speaks for Itself</h2>
        <p className={styles.center}>
          We know the anxiety that comes with visiting an auto repair shop: "Do
          I really need this part? Are they overcharging me?"
          <br />
          <br />
          At Burns' Auto Repair, our customers' trust and satisfaction is what
          drives our Business.
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
