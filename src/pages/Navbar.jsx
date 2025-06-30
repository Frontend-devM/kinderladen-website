import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLenisScroll = (id) => {
    const el = document.getElementById(id);
    if (el && window.lenis) {
      window.lenis.scrollTo(el);
      setMenuOpen(false); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      id="navbar"
    >
      <button className={styles.burgerMenu} onClick={toggleMenu}>
        &#9776;
      </button>

      <nav className={`${styles.navClosed} ${menuOpen ? styles.navOpen : ""}`}>
        <button className={styles.closeButton} onClick={toggleMenu}>
          X
        </button>
        <ul>
          <h1>المفكر الصغير</h1>
          <li>
            <button
              onClick={() => handleLenisScroll("Home")}
              className={styles.burgerBtn}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLenisScroll("products")}
              className={styles.burgerBtn}
            >
              Products
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLenisScroll("location")}
              className={styles.burgerBtn}
            >
              Location
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLenisScroll("download App")}
              className={styles.burgerBtn}
            >
              Download App
            </button>
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          </li>
          <li>
            <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          </li>
        </ul>
      </nav>

      <div className={styles.left}>
        <h1 className={styles.logo}>المفكر الصغير</h1>
      </div>

      <div className={styles.center}>
        <p className={styles.navItem} onClick={() => handleLenisScroll("Home")}>
          Home
        </p>
        <p
          className={styles.navItem}
          onClick={() => handleLenisScroll("products")}
        >
          Products
        </p>
        <p
          className={styles.navItem}
          onClick={() => handleLenisScroll("location")}
        >
          Location
        </p>
        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
      </div>

      <div className={styles.right}>
        <button
          className={styles.button}
          onClick={() => navigate("/AppDownload")}
        >
          Download App
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
