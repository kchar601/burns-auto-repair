import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices";
import ValueProp from "../../components/ValueProp/ValueProp";
import TestimonialsCarousel from "../../components/TestimonialsCarousel/TestimonialsCarousel";
import CtaLink from "../../components/CtaLink/CtaLink";
import shopUpcloseImage from "../../assets/shop-upclose.webp";
import shopUpclose640 from "../../assets/responsive/shop-upclose-640.webp";
import shopUpclose800 from "../../assets/responsive/shop-upclose-800.webp";
import shopUpclose1000 from "../../assets/responsive/shop-upclose-1000.webp";
import styles from "../../components/ValueProp/ValueProp.module.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Seo from "../../components/Seo/Seo";
import {
  AUTO_REPAIR_SCHEMA,
  buildBreadcrumbSchema,
} from "../../seo/seoConfig";

const HOME_TITLE = "Auto Repair & Mechanics in Newtown, PA | Burns' Auto Repair";
const HOME_DESCRIPTION =
  "Family-owned Burns' Auto Repair in Newtown, PA offers ASE-certified mechanics, honest diagnostics, and dependable maintenance and repair since 1957.";

function Homepage() {
  return (
    <main>
      <Seo
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
        canonicalPath="/"
        structuredData={[
          AUTO_REPAIR_SCHEMA,
          buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
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
        imgSrcSet={`${shopUpclose640} 640w, ${shopUpclose800} 800w, ${shopUpclose1000} 1000w, ${shopUpcloseImage} 1920w`}
        imgSizes="(max-width: 1150px) 100vw, 50vw"
        imgWidth="1920"
        imgHeight="1440"
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
