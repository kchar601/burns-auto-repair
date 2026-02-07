import { React, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import CtaLink from "../CtaLink/CtaLink";
import styles from "./AppNav.module.css";
import "animate.css";
import Logo from "../../assets/burnsautologo white.png";

function AppNav() {
  const [navOpen, setNavOpen] = useState(false);
  const [animation, setAnimation] = useState("");
  const hamburgerRef = useRef(null);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <NavLink className={styles.logoContainer} to="/">
          <img src={Logo} className={styles.logo}></img>

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
              onClick={toggleHide}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/services"
              onClick={toggleHide}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/about"
              onClick={toggleHide}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/testimonials"
              onClick={toggleHide}
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to="/contact"
              onClick={toggleHide}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className={`${styles.logoContainer} ${styles.hide}`}>
          <CtaLink
            link={"Tel: (215) 968-3791"}
            icon={<i className="fa-solid fa-phone"></i>}
          >
            215-968-3791
          </CtaLink>
        </div>
        <button
          className={styles.hamburger}
          onClick={toggleHide}
          ref={hamburgerRef}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );

  async function toggleHide() {
    if (!hamburgerRef.current || hamburgerRef.current.offsetParent === null) {
      return;
    }
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
