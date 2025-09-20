import React from 'react'
import profileImg from "../assets/img/my-profile-img.jpg"; // 
const Header = () => {
  return (
    <div>
       <header id="header" className="header dark-background d-flex flex-column">
      {/* Mobile toggle */}
      <i className="header-toggle d-xl-none bi bi-list"></i>

      {/* Profile Image */}
      <div className="profile-img">
        <img src={profileImg} alt="Anup Dhakal" className="img-fluid rounded-circle" />
      </div>
s
      {/* Logo / Name */}
      <a href="/" className="logo d-flex align-items-center justify-content-center">
        {/* If you want logo image, uncomment below and import it like profileImg */}
        {/* <img src={logoImg} alt="Logo" /> */}
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

      </header>

    </div>
  )
}

export default Header
