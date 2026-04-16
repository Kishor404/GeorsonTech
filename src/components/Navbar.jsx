import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/Logo/Georson.png';
import '../styles/Components.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // 🔥 NEW

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // 🔥 SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
      
      <div className="navbar-left">
        <div className="navbar-logo-wrapper">
          <Link to="/">
            <img src={Logo} alt="Georson Tech Pvt. Ltd" className="navbar-logo" />
          </Link>
        </div>
      </div>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="navbar-bar"></span>
        <span className="navbar-bar"></span>
        <span className="navbar-bar"></span>
      </div>

      <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>HOME</Link>
        <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
        <Link to="/services" onClick={toggleMenu}>SERVICES</Link>
        <Link to="/clients" onClick={toggleMenu}>CLIENTS</Link>
        <Link to="/gallery" onClick={toggleMenu}>GALLERY</Link>
        <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
      </nav>

    </header>
  );
}

export default Navbar;