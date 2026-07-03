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
              <a href="/blog">Blog</a>
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
                  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" className="icon-svg"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                </a>
                <a
                  className={styles.socialLink}
                  href="https://www.instagram.com/burnsautorepair/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Burns' Auto Repair's Instagram Page"
                >
                  <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="icon-svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
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
