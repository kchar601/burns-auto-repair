import styles from "./CtaLink.module.css";
import { NavLink } from "react-router-dom";

function CtaLink({ link, icon, altColor, children }) {
  return (
    <NavLink
      className={`${styles.cta} ${icon ? styles.icon : ""} ${altColor ? styles.altColor : ""}`}
      to={link}
    >
      {icon ? <span>{icon}</span> : ""}
      {children}
    </NavLink>
  );
}

export default CtaLink;
