import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/Logo/Georson.png';
import '../styles/components.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-container">
      {/* Logo Section */}
      <div className="navbar-left">
        <div className="navbar-logo-wrapper">
          <Link to="/">
            <img src={Logo} alt="Georson Tech Pvt. Ltd" className="navbar-logo" />
          </Link>
        </div>
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="navbar-bar"></span>
        <span className="navbar-bar"></span>
        <span className="navbar-bar"></span>
      </div>

      {/* Navigation Links */}
      <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>HOME</Link>
        <Link to="/about" onClick={toggleMenu}>ABOUT</Link>
        <Link to="/services" onClick={toggleMenu}>SERVICES</Link>
        <Link to="/brands" onClick={toggleMenu}>BRANDS</Link>
        <Link to="/clients" onClick={toggleMenu}>CLIENTS</Link>
        <Link to="/gallery" onClick={toggleMenu}>GALLERY</Link>
        <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
      </nav>
    </header>
  );
}

export default Navbar;