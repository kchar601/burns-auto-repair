import ServiceCard from "./ServiceCard";
import styles from "./FeaturedServices.module.css";

function FeaturedServices() {
  return (
    <div className={styles.serviceContainer}>
      <ServiceCard
        icon={<i class="fa-solid fa-wrench"></i>}
        cardTitle={"General Repairs"}
        subTitle={
          "From minor fixes to major repairs, we handle all your automotive needs."
        }
      ></ServiceCard>
      <ServiceCard />
      <ServiceCard />
    </div>
  );
}

export default FeaturedServices;
