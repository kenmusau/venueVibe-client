import React from 'react';
import Navbar from './navbar';


function AboutUs() {
  return (
    <div>
        <Navbar />
        <div className="bg-gray-100 py-16 flex">
        <div className="container mx-auto text-center flex items-center justify-center">
            <div
             className="w-720 h-837 flex-shrink-0"
             style={{
               borderRadius: '10px',
               background: `url(${aboutUsImage}), lightgray 50% / cover no-repeat, #D9D9D9`,
             }}
            ></div>
            <div className="ml-12" >
                <h2
                className="text-4xl font-bold mb-8"
                style={{
                  color: '#000',
                  fontFamily: 'Inter',
                  fontSize: '64px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: 'normal',
                }}
              >
                About Us 
                </h2>
                <p
                 className="text-lg mb-6"
                 style={{
                   color: 'rgba(0, 0, 0, 0.60)',
                   fontFamily: 'Inter',
                   fontSize: '30px',
                   fontStyle: 'normal',
                   fontWeight: 500,
                   lineHeight: '40px',
                 }}
               >
                 At Venue-Vibe, our mission is to bring together like-minded people to create and
                 celebrate in the various spaces we have. We offer creative working environments to
                 suit your needs.
                 </p>
             </div>
            </div>
        </div>
    </div>
  );
}

export default AboutUs;