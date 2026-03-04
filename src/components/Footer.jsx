import React from 'react';
import Logo from '../assets/Logo/Georson-nobg.png';
import '../styles/Components.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Brand Section */}
        <div className="footer-logo-wrapper">
          <img src={Logo} alt="Georson Tech Pvt. Ltd" className="footer-logo" />
        </div>

        {/* Contact Information Section */}
        <div className="footer-contact-info">
          <p>
            No. #4/8, Sriram Nagar Main Road, Karambakkam, Porur,<br />
            Chennai – 600 116.
          </p>
          <p>
            <a href="tel:+919840780897">+91 98407 80897</a> / <a href="tel:+919500081901">+91 95000 81901</a>
          </p>
          <p>
            <a href="mailto:projects@georsontech.com">projects@georsontech.com</a> / <a href="mailto:georsontech@gmail.com">georsontech@gmail.com</a>
          </p>
        </div>

      </div>

      {/* Copyright & Developer Info */}
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Georson Tech Pvt. Ltd. All Rights Reserved. 
          <span className="divider"> | </span> 
          <span className="developer-text">Developed By RIT CSBS</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;