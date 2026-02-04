import styles from "./ValueProp.module.css";

function ValueProp({ img, children, reverse }) {
  if (reverse)
    return (
      <div className={styles.container}>
        <div className={styles.textColumn}>{children}</div>
        <img className={styles.imageColumn} src={img} />
      </div>
    );
  return (
    <div className={styles.container}>
      <img className={styles.imageColumn} src={img} />
      <div className={styles.textColumn}>{children}</div>
    </div>
  );
}

export default ValueProp;
