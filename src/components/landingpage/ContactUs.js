// ContactUs.jsx

import React from 'react';
import Navbar from './Navbar';
import './ContactUs.css';

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 contact-title">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white p-6 rounded-md shadow-md contact-info">
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@venuevibe.com">info@venuevibe.com</a>
              </p>
            </div>
            {/* Phone */}
            <div className="bg-white p-6 rounded-md shadow-md contact-info">
              <h3 className="text-xl font-bold mb-4">Phone</h3>
              <p className="text-gray-600">(252) 555-0126</p>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-8 mt-16 social-title">
            Our Socials
          </h2>
          <div className="flex items-center gap-8">
            {/* Social Icons */}
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="social-icon"
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '10px',
                  background: '#F24E1E',
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-8 text-center footer-text">
        &copy; 2023. All rights reserved. Venue-Vibe
      </div>

      <img
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
          borderRadius: '10px',
        }}
        src=""
        alt="Decorative background"
      />
    </div>
  );
}

export default ContactUs;
