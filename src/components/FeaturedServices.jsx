import ServiceCard from "./ServiceCard";
import styles from "./FeaturedServices.module.css";

function FeaturedServices() {
  return (
    <>
      <div className={styles.serviceContainer}>
        <ServiceCard
          icon={<i className="fa-solid fa-wrench"></i>}
          cardTitle={"General Repairs"}
        >
          From minor fixes to major repairs, we handle all your automotive
          needs.
        </ServiceCard>
        <ServiceCard
          cardTitle={"Engine Diagnostics"}
          icon={<i className="fa-solid fa-gauge-high"></i>}
        >
          Advanced diagnostic tools to identify and resolve engine issues
        </ServiceCard>
        <ServiceCard
          cardTitle={"Oil Changes"}
          icon={<i className="fa-solid fa-droplet"></i>}
        >
          Regular maintenance to keep your engine running smoothly.
        </ServiceCard>
        <ServiceCard
          icon={<i className="fa-solid fa-car-battery"></i>}
          cardTitle={"Electrical Systems"}
        >
          Expert repair of batteries, alternators, and electrical components.
        </ServiceCard>
      </div>
      <div>
        <a className={styles.cta}>View All Services</a>
      </div>
    </>
  );
}

export default FeaturedServices;
