import styles from "./ValueProp.module.css";

function ValueProp() {
  return (
    <div className={styles.container}>
      <img className={styles.imageColumn} src="src\assets\shop-upclose.jpeg" />
      <div className={styles.textColumn}>
        <h3>Why Choose Burns Auto Repair?</h3>
      </div>
    </div>
  );
}

export default ValueProp;
