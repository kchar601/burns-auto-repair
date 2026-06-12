import { lazy, Suspense, useEffect, useRef, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices";
import ValueProp from "../../components/ValueProp/ValueProp";
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

const TestimonialsCarousel = lazy(
  () => import("../../components/TestimonialsCarousel/TestimonialsCarousel")
);

const HOME_TITLE = "Auto Repair & Mechanics in Newtown, PA | Burns' Auto Repair";
const HOME_DESCRIPTION =
  "Family-owned Burns' Auto Repair in Newtown, PA offers ASE-certified mechanics, honest diagnostics, and dependable maintenance and repair since 1957.";

// Defers mounting until the section is within 400px of the viewport.
// Keeps Swiper CSS and JS out of the initial render-blocking bundle.
function LazyTestimonials() {
  const [load, setLoad] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {load ? (
        <Suspense fallback={null}>
          <TestimonialsCarousel />
        </Suspense>
      ) : (
        <div style={{ minHeight: "480px" }} aria-hidden="true" />
      )}
    </div>
  );
}

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
          icon={<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon-svg"><path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>}
          cardTitle={"General Repairs"}
          outline
        >
          From minor fixes to major repairs, we handle all your automotive
          needs.
        </ServiceCard>
        <ServiceCard
          cardTitle={"Engine Diagnostics"}
          icon={<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon-svg"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>}
          outline
        >
          Advanced diagnostic tools to identify and resolve engine issues
        </ServiceCard>
        <ServiceCard
          cardTitle={"Oil Changes"}
          icon={<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor" className="icon-svg"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg>}
          outline
        >
          Regular maintenance to keep your engine running smoothly.
        </ServiceCard>
        <ServiceCard
          icon={<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon-svg"><path d="M80 96c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l96 0c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l16 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l16 0zm304 96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-32zM80 240c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0c-8.8 0-16 7.2-16 16z"/></svg>}
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
      <LazyTestimonials />
    </main>
  );
}

export default Homepage;
