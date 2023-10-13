import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./Nav.module.css";
import Search from "../../Search";

const Navbar = ({ onSearch }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

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
        <ul className={`navbar-nav mb-0 ${styles.navList}`}>
          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
          >
            <ul className={`navbar-nav ${styles.navList}`}>
              <li className={`nav-item ${styles.navItem}`}>
                <Link to="/" className={`${styles.navLink} mx-2`}>
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <Link
                  to="/ProductPage"
                  className={`${styles.navLink} mx-2 ${styles.disabled}`}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  aria-disabled="true"
                >
                  Products
                </Link>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <Link to="/contact" className={`${styles.navLink} mx-2`}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      {location.pathname === "/" && (
        <div className={`d-lg-none ${isSearchVisible ? "mb-3" : "d-none"}`}>
          <Search products={products} onSearch={onSearch} />
        </div>
      )}
      {location.pathname === "/" && (
        <div
          className={`ml-auto d-none d-lg-flex ${
            isSearchVisible ? "" : "d-none"
          }`}
        >
          <Search products={products} onSearch={onSearch} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
