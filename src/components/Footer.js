import React from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
        <div className="footer-section">
          <h3>About</h3>
          <p>
            Hi 👋 I'm <strong>Gyangi Devindi</strong>, a passionate developer
            building projects with React, Flutter & IoT. Connect with me through
            my socials below.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/gayangidevindi" target="_blank" rel="noopener noreferrer">
              <FaGithub /> 
            </a>
            <a href="https://www.linkedin.com/in/gayangi-devindi-0272a8290/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:gyangidevindi@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://web.facebook.com/profile.php?id=61551009600292" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Gyangi Devindi | All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
