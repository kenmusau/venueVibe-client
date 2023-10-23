import React from 'react';
import Navbar from './Navbar';
import './AboutUs.css';
import images2 from '../../images/img2.jpg';

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto text-center flex items-center justify-center">
        <div className="text-container">
          <h2 className="title" style={{ color: 'black', fontSize: '3rem', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
            About Us
          </h2>
          <p className="description" style={{ color: 'rgba(0, 0, 0, 0.60)', fontSize: '1.5rem', fontFamily: 'Inter', fontWeight: '500', lineHeight: '2rem', wordWrap: 'break-word' }}>
            At Venue-Vibe, our mission is to bring together like-minded people to create and celebrate in the various spaces we have. We offer creative working environments to suit your needs.
          </p>
        </div>
        <div className="image-container">
          <img
            src={images2}
            alt="Image Placeholder"
            style={{ width: '100%', height: '100%', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10 }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;



