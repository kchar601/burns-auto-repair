import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import CtaLink from "../CtaLink/CtaLink";
import styles from "./AppNav.module.css";
import "animate.css";
import Logo from "../../assets/responsive/logo-400.webp";

const CLOSE_ANIMATION_MS = 700;

function AppNav() {
  const [navOpen, setNavOpen] = useState(false);
  const [animation, setAnimation] = useState("");
  const hamburgerRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarInner}>
        <NavLink className={styles.logoContainer} to="/">
          <img
            src={Logo}
            className={styles.logo}
            alt="Burns Auto Repair logo"
            width="400"
            height="128"
            loading="eager"
          />
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
            icon={<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="icon-svg"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>}
          >
            215-968-3791
          </CtaLink>
        </div>
        <button
          type="button"
          className={styles.hamburger}
          onClick={toggleHide}
          ref={hamburgerRef}
          aria-label="Toggle navigation menu"
        >
          <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
          </svg>
        </button>
      </div>
    </nav>
  );

  function toggleHide() {
    if (!hamburgerRef.current || hamburgerRef.current.offsetParent === null) {
      return;
    }

    if (navOpen) {
      setAnimation("animate__fadeOutUp");
      closeTimeoutRef.current = setTimeout(() => {
        setNavOpen(false);
      }, CLOSE_ANIMATION_MS);
    } else {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setAnimation("animate__fadeInDown");
      setNavOpen(true);
    }
  }
}

export default AppNav;
