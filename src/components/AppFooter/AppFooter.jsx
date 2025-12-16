import { NavLink } from "react-router-dom";
import styles from "../AppNav/AppNav.module.css";
import SmartStatus from "../SmartStatus/SmartStatus";

function AppFooter({ theme }) {
  return (
    <footer className={styles.footbar}>
      <div className={styles.footbarInner}>
        <div className={styles.logoAndHours}>
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
          <SmartStatus />
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul className={`${styles.links} ${styles.linksVert}`}>
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
        </div>
        <div>
          <h5>Services</h5>
          <ul className={`${styles.links} ${styles.linksVert}`}>
            <li>General Maintenance</li>
            <li>PA Inspections</li>
            <li>Oil Changes</li>
            <li>Scheduled Maintenance</li>
            <li>Brakes & Tires</li>
            <li>AC & Heating</li>
          </ul>
        </div>
        <div>
          <h5>Contact Us</h5>
          <ul
            className={`${styles.links} ${styles.linksVert} ${styles.socials}`}
          >
            <li>(215) 968-3791</li>
            <li>burnsauto19@gmail.com</li>
            <li>19 N Sycamore Street</li>
            <li className={styles.noMargin}>Newtown, PA 18940</li>
            <div className={styles.socialsInner}>
              <a>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </ul>
        </div>
      </div>
      <small className={styles.copywrite}>
        © {new Date().getFullYear()} Burns Auto Repair, Inc. All rights
        reserved.
      </small>
    </footer>
  );
}

export default AppFooter;
