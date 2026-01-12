import PageHeader from "./../../components/PageHeader/PageHeader";
import styles from "./Services.module.css";
import AccordionCard from "./../../components/AccordionCard/AccordionCard";
function Services() {
  return (
    <main className="subPage">
      <PageHeader
        title={"Our Services"}
        sub={
          "We offer a comprehensive range of auto repair and maintenance services to keep your vehicle running at peak performance. Our certified technicians have the expertise and equipment to handle any job."
        }
      />
      <div className={styles.serviceContainer}>
        <AccordionCard
          title={"General Repairs"}
          content={
            "From minor fixes to major repairs, we handle all your automotive needs with expertise and care. Our skilled technicians can diagnose and repair any issue."
          }
          icon={<i className="fa-solid fa-wrench"></i>}
          className={styles.card}
        />
        <AccordionCard
          title={"Engine Diagnostics"}
          content={
            "Advanced diagnostic tools to quickly identify and resolve engine issues and warning lights. We use state-of-the-art computer systems for accurate results."
          }
          icon={<i className="fa-solid fa-gauge-high"></i>}
        />
        <AccordionCard
          title={"Oil Changes & Fluid Service"}
          content={
            "Regular oil changes and fluid checks to keep your engine running smoothly and efficiently. We use quality oils and filters for optimal performance."
          }
          icon={<i className="fa-solid fa-droplet"></i>}
        />
        <AccordionCard
          title={"Electrical Systems"}
          content={
            "Expert repair and maintenance of batteries, alternators, starters, and all electrical components. We ensure your vehicle's electrical system runs flawlessly."
          }
          icon={<i className="fa-solid fa-car-battery"></i>}
        />
        <AccordionCard
          title={"AC & Heating"}
          content={
            "Complete climate control service including AC repairs, heating systems, and refrigerant recharge. Stay comfortable in any weather condition."
          }
          icon={<i className="fa-solid fa-wind"></i>}
        />
        <AccordionCard
          title={"Brake Service"}
          content={
            "Comprehensive brake inspection, pad replacement, rotor resurfacing, and fluid service. Your safety is our priority with reliable brake systems."
          }
          icon={<i className="fa-solid fa-traffic-light"></i>}
        />
        <AccordionCard
          title={"Transmission Service"}
          content={
            "Expert transmission repair, maintenance, and fluid changes. We service both automatic and manual transmissions to ensure smooth shifting."
          }
          icon={<i className="fa-solid fa-gear"></i>}
        />
        <AccordionCard
          title={"Tire Service"}
          content={
            "Tire rotation, balancing, alignment, and replacement. We help you get the most life out of your tires and ensure safe handling."
          }
          icon={<i className="fa-solid fa-truck-monster"></i>}
        />
        <AccordionCard
          title={"Tune-Ups"}
          content={
            "Complete engine tune-ups including spark plug replacement, filter changes, and system optimization for peak performance and fuel efficiency."
          }
          icon={<i className="fa-solid fa-bolt"></i>}
        />
        <AccordionCard
          title={"Suspension & Steering"}
          content={
            "Repair and replacement of shocks, struts, and steering components. Enjoy a smooth, comfortable ride with proper suspension maintenance."
          }
          icon={<i className="fa-solid fa-shield"></i>}
        />
        <AccordionCard
          title={"Cooling System"}
          content={
            "Radiator repair, coolant flushes, and thermostat replacement. We prevent overheating and keep your engine at the right temperature."
          }
          icon={<i className="fa-solid fa-temperature-high"></i>}
        />
        <AccordionCard
          title={"Check Engine Light"}
          content={
            "Professional diagnosis and repair of check engine light issues. We identify the root cause and provide lasting solutions to keep you on the road."
          }
          icon={<i className="fa-solid fa-triangle-exclamation"></i>}
        />
      </div>
    </main>
  );
}

export default Services;
