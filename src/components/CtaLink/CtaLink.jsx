import styles from "./CtaLink.module.css";
import { NavLink } from "react-router-dom";

function CtaLink({ link, icon, children }) {
  return (
    <NavLink className={`${styles.cta} ${icon ? styles.icon : ""}`} to={link}>
      {icon ? <span>{icon}</span> : ""}
      {children}
    </NavLink>
  );
}

export default CtaLink;
