import React from 'react';
import Navbar from './Navbar';
import './AboutUs.css';

import aboutUsImage from ''; 

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto text-center flex items-center justify-center">
        <div
          className="image-container"
          style={{ background: `url(${aboutUsImage}) lightgray 50% / cover no-repeat, #D9D9D9` }}
        ></div>
        <div className="text-container">
          <h2 className="title">About Us</h2>
          <p className="description">
            At Venue-Vibe, our mission is to bring together like-minded people to create and
            celebrate in the various spaces we have. We offer creative working environments to
            suit your needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
