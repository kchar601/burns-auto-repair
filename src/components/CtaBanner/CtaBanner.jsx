import CtaLink from "./../CtaLink/CtaLink";
import styles from "./CtaBanner.module.css";

function CtaBanner({ title, body, ctaText, link }) {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      <p>{body}</p>
      <CtaLink link={link}>{ctaText}</CtaLink>
    </div>
  );
}

export default CtaBanner;
