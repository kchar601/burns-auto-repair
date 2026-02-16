import styles from "./CtaLink.module.css";
import { NavLink } from "react-router-dom";

function CtaLink({ link, icon, altColor, iconEnd, targetBlank, children }) {
  const classNames = `${styles.cta} ${icon ? styles.icon : ""} ${altColor ? styles.altColor : ""} ${iconEnd ? styles.iconEnd : ""}`;

  if (targetBlank) {
    return (
      <a className={classNames} href={link} target="_blank" rel="noopener noreferrer">
        {icon && !iconEnd ? <span>{icon}</span> : null}
        {children}
        {icon && iconEnd ? <span>{icon}</span> : null}
      </a>
    );
  }

  return (
    <NavLink className={classNames} to={link}>
      {icon && !iconEnd ? <span>{icon}</span> : null}
      {children}
      {icon && iconEnd ? <span>{icon}</span> : null}
    </NavLink>
  );
}

export default CtaLink;
