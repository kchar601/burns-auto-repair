import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroOverlay}>
        <h1>Expert Auto Repair Services You Can Trust</h1>
        <p>
          Professional automotive repair and maintenance services with over 25
          years of experience. Quality service, honest pricing, and customer
          satisfaction guaranteed.
        </p>
        <span>
          <button className={styles.cta}>Schedule Service</button>
        </span>
      </div>
      <img className={styles.heroImg} src="src\assets\shopzoomed.jpg" />
      Burns Auto Repair
    </div>
  );
}

export default Homepage;
