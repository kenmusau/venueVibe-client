import React from 'react';
import Navbar from './Navbar';
import './ContactUs.css'; 
import images3 from '../../images/img3.jpg'; 
import SocialIcons from './SocialIcons';
import AdditionalContent from './AdditionalContent';

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto text-center flex items-center justify-center">
        <div className="text-container">
          <h2 className="title" style={{ color: 'black', fontSize: '3rem', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
            Contact Us
          </h2>
          <div style={{ width: '50%', height: '4px', background: 'black',  margin: '5px 20%', marginLeft: '5px' }}></div>
          <p className="description" style={{ color: 'rgba(0, 0, 0, 0.60)', fontSize: '1.5rem', fontFamily: 'Inter', fontWeight: '500', lineHeight: '2rem', wordWrap: 'break-word' }}>
            Feel free to reach out to us for any inquiries or feedback. We are here to assist you.
          </p>
          < AdditionalContent />
          < SocialIcons />
        </div>
        <div className="image-container">
          <img
            src={images3}
            alt="Contact Image Placeholder"
            style={{ width: '100%', height: '100%', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10 }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;




