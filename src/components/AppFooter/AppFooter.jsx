import { NavLink } from "react-router-dom";
import styles from "../AppNav/AppNav.module.css";
import SmartStatus from "../SmartStatus/SmartStatus";
import Logo from "../../assets/responsive/logo-400.webp";

function AppFooter() {
  return (
    <footer className={styles.footbar}>
      <div className={styles.footbarInner}>
        <div className={styles.logoAndHours}>
          <NavLink
            className={`${styles.logoContainer} ${styles.logoContainerFooter}`}
            to="/"
          >
            <img
              src={Logo}
              className={styles.logo}
              alt="Burns Auto Repair logo"
              width="400"
              height="128"
              loading="lazy"
              decoding="async"
            />
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
              <a href="/blog/">Blog</a>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul className={`${styles.links} ${styles.linksVert}`}>
            <li>
              <NavLink to="/services#state-inspections-emissions">
                State Inspections & Emissions
              </NavLink>
            </li>
            <li>
              <NavLink to="/services#scheduled-maintenance">
                Scheduled Maintenance
              </NavLink>
            </li>
            <li>
              <NavLink to="/services#brakes-tires">Brakes & Tires</NavLink>
            </li>
            <li>
              <NavLink to="/services#steering-suspension">
                Steering & Suspension
              </NavLink>
            </li>
            <li>
              <NavLink to="/services#ac-heating">AC & Heating</NavLink>
            </li>
            <li>
              <NavLink to="/services#check-engine-diagnostics">
                Check Engine & Diagnostics
              </NavLink>
            </li>
            <li>
              <NavLink to="/services#electrical-systems">
                Electrical Systems
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul
            className={`${styles.links} ${styles.linksVert} ${styles.socials}`}
          >
            <li>
              <a href="tel:+12159683791">(215) 968-3791</a>
            </li>
            <li>
              <a href="mailto:office+website@burnsautorepair.com">
                office@burnsautorepair.com
              </a>
            </li>
            <li className={styles.noMargin}>
              <a
                href="https://maps.app.goo.gl/XPAXPgE9K1cnejQG6"
                target="_blank"
                rel="noopener noreferrer"
              >
                19 N Sycamore Street
                <br />
                Newtown, PA 18940
              </a>
            </li>
            <li className={styles.noMargin}>
              <div className={styles.socialsInner}>
                <a
                  className={styles.socialLink}
                  href="https://www.facebook.com/BurnsAutoRepair19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Burns' Auto Repair's Facebook Page"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  className={styles.socialLink}
                  href="https://www.instagram.com/burnsautorepair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Burns' Auto Repair's Instagram Page"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <small className={styles.copywrite}>
        © {new Date().getFullYear()} Burns Auto Repair, Inc. All rights
        reserved.
        <br />
        <a href="https://www.charltonit.com" className={styles.callingCard}>
          Made by Charlton IT
        </a>
      </small>
    </footer>
  );
}

export default AppFooter;
