import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav({ theme }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
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
          <img className={styles.logo} />
        </NavLink>
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
          <a className={`cta ` + styles.callBtn} href="Tel: (215) 968-3791">
            <i className="fa-solid fa-phone"></i>
            215-968-3791
          </a>
        </div>
      </div>
    </nav>
  );
}

export default AppNav;
