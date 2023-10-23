import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    width: '100%',
    height: '79px',
    position: 'relative',
  };

  const backgroundBarStyle = {
    width: '1398px',
    height: '79px',
    left: '0',
    top: '0',
    position: 'absolute',
    background: '#D8D8D8',
    borderRadius: '10px',
  };

  const logoContainerStyle = {
    width: '150px',
    height: '50px',
    left: '0',
    top: '9px',
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    display: 'inline-flex',
  };

  const logoStyle = {
    width: '150px',
    height: '50px',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    display: 'flex',
  };

  const venueStyle = {
    color: '#FF5D22',
    fontSize: '32px',
    fontFamily: 'Keania One',
    fontWeight: '400',
    wordWrap: 'break-word',
  };

  const vibeStyle = {
    color: '#9C6969',
    fontSize: '32px',
    fontFamily: 'Jomhuria',
    fontWeight: '400',
    wordWrap: 'break-word',
  };

  const navItemStyle = {
    color: 'black',
    fontSize: '24px',
    fontFamily: 'Inter',
    fontWeight: '700',
    wordWrap: 'break-word',
    cursor: 'pointer', 
  };

  return (
    <div style={navbarStyle}>
      <div style={backgroundBarStyle} />
      <div style={logoContainerStyle}>
        <div style={logoStyle}>
          <span style={venueStyle}>Venue</span>
          <span style={vibeStyle}>Vibe</span>
        </div>
      </div>
      <Link to="/about-us" style={navItemStyle}>
        <div style={{ ...navItemStyle, left: '824px', top: '20px', position: 'absolute' }}>About Us</div>
      </Link>
      <Link to="/services" style={navItemStyle}>
        <div style={{ ...navItemStyle, left: '1030px', top: '22px', position: 'absolute' }}>Services</div>
      </Link>
      <Link to="/contact-us" style={navItemStyle}>
        <div style={{ ...navItemStyle, left: '1247px', top: '20px', position: 'absolute' }}>Contact Us</div>
      </Link>
    </div>
  );
};

export default Navbar;
