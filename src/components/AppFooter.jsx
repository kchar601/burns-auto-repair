import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav({ theme }) {
  return (
    <footer className={styles.footbar}>
      <div className={styles.footbarInner}>
        <NavLink
          className={`${styles.logoContainer} ${styles.logoContainerFooter}`}
          to="/"
        >
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
        <ul className={`${styles.links} ${styles.linksVert}`}>
          <h5>Quick Links</h5>
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
        <ul className={`${styles.links} ${styles.linksVert}`}>
          <h5>Services</h5>
          <li>General Maintenance</li>
          <li>PA Inspections</li>
          <li>Oil Changes</li>
          <li>Scheduled Maintenance</li>
          <li>Brakes & Tires</li>
          <li>AC & Heating</li>
        </ul>
        <ul className={`${styles.links} ${styles.linksVert} ${styles.socials}`}>
          <h5>Contact Us</h5>
          <li>(215) 968-3791</li>
          <li>burnsauto19@gmail.com</li>
          <li>19 N Sycamore Street</li>
          <li className={styles.noMargin}>Newtown, PA 18940</li>
          <div className={styles.socialsInner}>
            <a>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a>
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </ul>
      </div>
      <small className={styles.copywrite}>
        © {new Date().getFullYear()} Burns Auto Repair, Inc. All rights
        reserved.
      </small>
    </footer>
  );
}

export default AppNav;
