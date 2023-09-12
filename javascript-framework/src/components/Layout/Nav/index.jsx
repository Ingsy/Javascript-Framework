import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <Link to="/" className={`navbar-brand ${styles.brand}`}>
        Online Shop
      </Link>
      <button
        className={`navbar-toggler ${styles.navbarToggler}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className={`navbar-toggler-icon ${styles.togglerIcon}`}></span>
      </button>
      <div
        className={`collapse navbar-collapse ${styles.navCollapse}`}
        id="navbarNav"
      >
        <ul className={`navbar-nav ${styles.navList}`}>
          <li className={`nav-item ${styles.navItem}`}>
            <Link to="/Homepage" className={`nav-link ${styles.navLink}`}>
              Home
            </Link>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <Link to="/ProductPage" className={`nav-link ${styles.navLink}`}>
              Products
            </Link>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <Link to="/contact" className={`nav-link ${styles.navLink}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
