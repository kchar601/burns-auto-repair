import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <div>
        <img className={styles.hero} src="src\assets\shop.jpg" />
        <div className={styles.heroOverlay}>
          <h1>Expert Auto Repair Services You Can Trust</h1> Professional
          automotive repair and maintenance services with over 25 years of
          experience. Quality service, honest pricing, and customer satisfaction
          guaranteed.
        </div>
      </div>
      Burns Auto Repair
    </>
  );
}

export default Homepage;
