import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import "animate.css";

function AppNav({ theme }) {
  const [navOpen, setNavOpen] = useState(false);
  const [animation, setAnimation] = useState("");

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
        <ul
          className={`${styles.links} ${
            styles.navLinks
          } animate__animated ${animation} ${navOpen ? "" : styles.toggleHide}`}
        >
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
        <div className={`${styles.logoContainer} ${styles.hide}`}>
          <a className={`cta ` + styles.callBtn} href="Tel: (215) 968-3791">
            <i className="fa-solid fa-phone"></i>
            215-968-3791
          </a>
        </div>
        <button className={styles.hamburger} onClick={toggleHide}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );

  async function toggleHide() {
    if (navOpen) {
      await setAnimation("animate__fadeOutUp");
      setTimeout(() => {
        setNavOpen(!navOpen);
      }, 700);
    } else {
      await setAnimation("animate__fadeInDown");
      setNavOpen(!navOpen);
    }
  }
}

export default AppNav;
