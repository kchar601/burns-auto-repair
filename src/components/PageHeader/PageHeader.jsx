import styles from "./PageHeaders.module.css";

function PageHeader({ title, sub }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
      <p className={styles.subText}>{sub}</p>
    </div>
  );
}

export default PageHeader;
