import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function SocialIcons() {
    const iconStyle = {
      color: '#F24E1E',
    };
  
    return (
      <div>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={45} style={iconStyle} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={45} style={iconStyle} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={45} style={iconStyle} />
        </a>
      </div>
    );
  }
  

export default SocialIcons;
