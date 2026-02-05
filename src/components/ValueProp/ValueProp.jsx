import styles from "./ValueProp.module.css";

function ValueProp({ img, iframe, children, reverse }) {
  // Choose the media: prefer iframe when provided and no img is passed
  const media =
    iframe && !img ? (
      <div className={styles.imageColumn}>{iframe}</div>
    ) : img ? (
      <img className={styles.imageColumn} src={img} alt="" />
    ) : null;

  if (reverse)
    return (
      <div className={styles.container}>
        <div className={styles.textColumn}>{children}</div>
        {media}
      </div>
    );

  return (
    <div className={styles.container}>
      {media}
      <div className={styles.textColumn}>{children}</div>
    </div>
  );
}

export default ValueProp;
