import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo/Georson.png';
import '../styles/components.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <div className="footer-logo-wrapper">
            <img src={Logo} alt="Georson Tech Pvt. Ltd" className="footer-logo" />
          </div>
          <p className="footer-description">
            Providing high-quality tech solutions and trusted brands to meet your business needs.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/brands">Our Brands</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <p>
              <strong>Address:</strong><br />
              No. #4/8, Sriram Nagar Main Road,<br />
              Karambakkam, Porur,<br />
              Chennai – 600 116.
            </p>
            <p>
              <strong>Phone:</strong><br />
              <a href="tel:+919840780897">+91 98407 80897</a> / <a href="tel:+919500081901">+91 95000 81901</a>
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:projects@georsontech.com">projects@georsontech.com</a><br />
              <a href="mailto:georsontech@gmail.com">georsontech@gmail.com</a>
            </p>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Georson Tech Pvt. Ltd. All Rights Reserved. | Developed By RIT CSBS</p>
      </div>
    </footer>
  );
}

export default Footer;