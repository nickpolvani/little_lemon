import React from 'react';
import '../style/Footer.css'; // Make sure to create a corresponding CSS file for styling
import Logo from '../images/Logo.svg'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-section">
            <img src={Logo} alt="Logo" />
        </div>
      <div className="footer-section">
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email</p>
      </div>
      <div className="footer-section">
        <h4>Social Media Links</h4>
        <p>Address</p>
        <p>Phone number</p>
        <p>Email</p>
        {/* Here you would typically have social media icons linking to respective profiles */}
      </div>
    </footer>
  );
}

export default Footer;
