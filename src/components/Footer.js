import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Company Info Section */}
          <div className="footer-column">
            <h4>About Us</h4>
            <p>We are dedicated to providing the best vehicle rental experience.</p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>© 2024 MotoLease. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;