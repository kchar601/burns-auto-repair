import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./FeaturedServices.module.css";
import CtaLink from "../CtaLink/CtaLink";

function FeaturedServices({ outline }) {
  return (
    <>
      <div className={styles.serviceContainer}>
        <ServiceCard
          icon={<i className="fa-solid fa-wrench"></i>}
          cardTitle={"General Repairs"}
          {...(outline && { outline: true })}
        >
          From minor fixes to major repairs, we handle all your automotive
          needs.
        </ServiceCard>
        <ServiceCard
          cardTitle={"Engine Diagnostics"}
          icon={<i className="fa-solid fa-gauge-high"></i>}
          {...(outline && { outline: true })}
        >
          Advanced diagnostic tools to identify and resolve engine issues
        </ServiceCard>
        <ServiceCard
          cardTitle={"Oil Changes"}
          icon={<i className="fa-solid fa-droplet"></i>}
          {...(outline && { outline: true })}
        >
          Regular maintenance to keep your engine running smoothly.
        </ServiceCard>
        <ServiceCard
          icon={<i className="fa-solid fa-car-battery"></i>}
          cardTitle={"Electrical Systems"}
          {...(outline && { outline: true })}
        >
          Expert repair of batteries, alternators, and electrical components.
        </ServiceCard>
      </div>
      <div className={styles.linkContainer}>
        <CtaLink link="/services">View All Services</CtaLink>
      </div>
    </>
  );
}

export default FeaturedServices;
