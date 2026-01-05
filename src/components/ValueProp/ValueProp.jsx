import styles from "./ValueProp.module.css";

function ValueProp({ img, children }) {
  return (
    <div className={styles.container}>
      <img className={styles.imageColumn} src={img} />
      <div className={styles.textColumn}>{children}</div>
    </div>
  );
}

export default ValueProp;
