import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="background-bar" />
      <div className="logo-container">
        <div className="logo">
          <span className="venue">Venue</span>
          <span className="vibe">Vibe</span>
        </div>
      </div>
      <Link to="/about-us" className="nav-item" style={{ left: '40%' }}>
        About Us
      </Link>
      <Link to="/services" className="nav-item" style={{ left: '60%' }}>
        Services
      </Link>
      <Link to="/contact-us" className="nav-item" style={{ left: '80%' }}>
        Contact Us
      </Link>
    </div>
  );
}

export default Navbar;
