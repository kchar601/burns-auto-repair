import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav({ theme }) {
  return (
    <footer className={styles.footbar}>
      <div className={styles.logoColumn}>
        <NavLink className={styles.logoContainer} to="/">
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
        </NavLink>
        <p className={(styles.textVariant, styles.pTight)}>
          Serving Newtown and its surrounding area for over 40 years.
        </p>
      </div>
      <ul className={styles.links}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/services"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/testimonials"
          >
            Testimonials
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className={styles.logoContainer}>
        <button className={`cta ` + styles.callBtn}>
          <i class="fa-solid fa-phone"></i>
          215-968-3791
        </button>
      </div>
    </footer>
  );
}

export default AppNav;
