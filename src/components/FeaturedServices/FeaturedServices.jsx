import styles from "./FeaturedServices.module.css";

function FeaturedServices({ CTALink, children }) {
  return (
    <>
      <div className={styles.serviceContainer}>{children}</div>
      <div className={styles.linkContainer}>{CTALink}</div>
    </>
  );
}

export default FeaturedServices;
