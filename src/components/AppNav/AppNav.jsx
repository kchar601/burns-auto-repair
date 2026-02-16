import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import CtaLink from "../CtaLink/CtaLink";
import styles from "./AppNav.module.css";
import "animate.css";
import Logo from "../../assets/burnsautologo white.png";

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
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={941}
            height={301}
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
            icon={<i className="fa-solid fa-phone"></i>}
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
          <i className="fa-solid fa-bars"></i>
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
