import PageHeader from "./../../components/PageHeader/PageHeader";
import styles from "./Services.module.css";
import AccordionCard from "./../../components/AccordionCard/AccordionCard";
function Services() {
  return (
    <main>
      <PageHeader
        title={"Our Services"}
        sub={
          "We offer a comprehensive range of auto repair and maintenance services to keep your vehicle running at peak performance. Our certified technicians have the expertise and equipment to handle any job."
        }
      />
      <div className={styles.serviceContainer}>
        <AccordionCard title={"General Repairs"} content={"Hello"} />
      </div>
    </main>
  );
}

export default Services;
