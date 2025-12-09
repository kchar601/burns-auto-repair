import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h1>Keeping Newtown Moving Since 1964</h1>
          <p>
            We don't just fix cars; we serve neighbors. Experience the
            difference of a family-run shop that has been a staple of the
            Newtown community since 1964.
          </p>
          <span>
            <a className={styles.cta} href="Tel: (215) 968-3791">
              Schedule Service
            </a>
          </span>
        </div>
        <img className={styles.heroImg} src="src\assets\shopzoomed.jpg" />
      </div>
      Burns Auto Repair
    </>
  );
}

export default Homepage;
