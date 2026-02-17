import React, { useEffect, useState } from "react";
import profileImg from "../assets/img/my-profile-img.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header id="header" className={`header dark-background d-flex flex-column ${isMenuOpen ? "header-show" : ""}`}>
      {/* Mobile toggle */}
      <i
        className={`header-toggle d-xl-none bi ${isMenuOpen ? "bi-x" : "bi-list"}`}
        onClick={toggleMenu}
      ></i>

      {/* Profile Image */}
      <div className="profile-img">
        <img src={profileImg} alt="Anup Dhakal" className="img-fluid rounded-circle" />
      </div>

      {/* Logo / Name */}
      <a href="/" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">Anup Dhakal</h1>
      </a>

      {/* Social Links */}
      <div className="social-links text-center">
        <a href="https://www.facebook.com/anup.dhakal.545" className="facebook" target="_blank" rel="noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/anoop057/" className="instagram" target="_blank" rel="noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/anup-dhakal-198998211/" className="linkedin" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/@THESPORTINGTECHIE" className="youtube" target="_blank" rel="noreferrer">
          <i className="bi bi-youtube"></i>
        </a>
      </div>

      {/* Navigation Menu */}
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="#hero" className="active" onClick={closeMenu}>
              <i className="bi bi-house navicon"></i> Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
            <a href="#resume" onClick={closeMenu}>
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>
              <i className="bi bi-hdd-stack navicon"></i> Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1F7OXyVSnpTsC1BgR3IucnqYBLJQ3yp_n/view?usp=drive_link"
              rel="noreferrer"
              target="_blank"
              onClick={closeMenu}
            >
              <i className="bi bi-file-earmark-pdf navicon"></i>View CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
