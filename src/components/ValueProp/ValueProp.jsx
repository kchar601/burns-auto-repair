import styles from "./ValueProp.module.css";

function ValueProp({
  img,
  iframe,
  children,
  reverse,
  mediaClassName,
  paddingBottom,
}) {
  // Choose the media: prefer iframe when provided and no img is passed
  const media =
    iframe && !img ? (
      <div className={`${styles.imageColumn} ${styles.iframe}`}>{iframe}</div>
    ) : img ? (
      <img
        className={`${styles.imageColumn} ${mediaClassName ? mediaClassName : ""}`}
        src={img}
        alt=""
      />
    ) : null;

  console.log(mediaClassName);

  if (reverse)
    return (
      <div
        className={`${styles.container} ${styles.reverse} ${paddingBottom ? styles.paddingBottom : ""}`}
      >
        <div className={styles.textColumn}>{children}</div>
        {media}
      </div>
    );

  return (
    <div
      className={`${styles.container} ${paddingBottom ? styles.paddingBottom : ""}`}
    >
      {media}
      <div className={styles.textColumn}>{children}</div>
    </div>
  );
}

export default ValueProp;
