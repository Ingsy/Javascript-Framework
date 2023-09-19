import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Nav.module.css";
import Search from "../../Search";

const Navbar = ({ products, onSearch }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const toggleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <Link to="/" className={styles.brand}>
        Online Shop
      </Link>

      <button
        className={`navbar-toggler ${styles.navbarToggler}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed ? "true" : "false"}
        aria-label="Toggle navigation"
        onClick={() => {
          toggleNavCollapse();
          toggleSearch();
        }}
      >
        {isNavCollapsed ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faTimes} className={styles.closeIcon} />
        )}
      </button>

      <div
        className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
        id="navbarNav"
      >
        <ul className={`navbar-nav ${styles.navList}`}>
          <li className={`nav-item ${styles.navItem}`}>
            <Link to="/Homepage" className={`nav-link ${styles.navLink} mx-2`}>
              Home
            </Link>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <Link
              to="/ProductPage"
              className={`nav-link ${styles.navLink} mx-2`}
            >
              Products
            </Link>
          </li>
          <li className={`nav-item ${styles.navItem}`}>
            <Link to="/contact" className={`nav-link ${styles.navLink} mx-2`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={`d-lg-none ${isSearchVisible ? "mb-3" : "d-none"}`}>
        <Search products={products} onSearch={onSearch} />
      </div>
      <div
        className={`ml-auto d-none d-lg-flex ${
          isSearchVisible ? "" : "d-none"
        }`}
      >
        <Search products={products} onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Navbar;
