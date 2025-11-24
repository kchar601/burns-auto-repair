import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav({ theme }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        {theme === "dark" ? (
          <img
            src="src\assets\burnsautologo white.png"
            className={styles.logo}
          ></img>
        ) : (
          <img
            src="src\assets\burnsautologo dark.png"
            className={styles.logo}
          ></img>
        )}
        <img className={styles.logo} />{" "}
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/testimonials">Testimonials</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className={styles.logoContainer}>
        <button className={`cta ` + styles.callBtn}>215-968-3791</button>
      </div>
    </nav>
  );
}

export default AppNav;
