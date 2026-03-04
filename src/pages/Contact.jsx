import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "../styles/Contact.css";

import TitleBar from "../components/TitleBar";
import ContactTitleImg from "../assets/Contact/titleImg.png";

function Contact() {
  return (
    <div className="contact-page">

      <TitleBar title="CONTACT US" bg={ContactTitleImg}/>


      <div className="contact-wrapper">

        {/* LEFT CARD */}
        <div className="contact-card contact-left-card">
          <p className="contact-small-heading">GET IN TOUCH</p>
          <h2 className="contact-main-heading">Do You Have Any Questions?</h2>

          <p className="contact-description">
            If you have any questions or comments about our services,
            contact us using the form or the details below to let us
            know how we can assist you.
          </p>

          {/* Address */}
          <div className="contact-info-row">
            <div className="contact-info-title">
              <FaMapMarkerAlt className="contact-info-icon" />
              <h4 className="contact-info-heading">Address</h4>
            </div>
            <p>
              No. #4/8, Sriram Nagar Main Road,<br />
              Karambakkam, Porur,<br />
              Chennai - 600 116
            </p>
          </div>

          {/* Phone */}
          <div className="contact-info-row">
            <div className="contact-info-title">
              <FaPhoneAlt className="contact-info-icon" />
              <h4 className="contact-info-heading">Phone</h4>
            </div>
            <p>+91 95407 80897</p>
            <p>+91 95000 81901</p>
          </div>

          {/* Email */}
          <div className="contact-info-row">
            <div className="contact-info-title">
              <FaEnvelope className="contact-info-icon" />
              <h4 className="contact-info-heading">Email</h4>
            </div>
            <p>projects@georsontech.com</p>
            <p>georsontech@gmail.com</p>
          </div>

          <div className="contact-social-icons">
            <a href="#" className="contact-social-circle contact-instagram">
              <FaInstagram />
            </a>

            <a href="#" className="contact-social-circle contact-linkedin">
              <FaLinkedinIn />
            </a>

            <a href="#" className="contact-social-circle contact-twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="contact-card contact-right-card">
          <h2 className="contact-form-heading">Send us a message</h2>

          <div className="contact-form-group">
            <label>Name <span>*</span></label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="contact-form-group">
            <label>Email <span>*</span></label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="contact-form-group">
            <label>Mobile <span>*</span></label>
            <input type="text" placeholder="Enter your phone" />
          </div>

          <div className="contact-form-group">
            <label>Message <span>*</span></label>
            <textarea rows="5" placeholder="Your message here..." />
          </div>

          <button className="contact-send-btn">
            Send Message →
          </button>
        </div>

      </div>
    </div>
  );
}

export default Contact;