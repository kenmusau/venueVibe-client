import React from 'react';
import Navbar from './navbar';

function Services() {
    const services = [
        {
            title: 'Workspaces',
            description: ''
        },
        {
            title: 'Parties',
            description: ''
        },
        {
            title: 'Film Shoots',
            description: ''
        },
    ];

    return (
        <div>
          <Navbar />
          <div className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-md shadow-md">
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
              <div className="w-732 h-88 flex-shrink-0">
                <p
                  className="text-black font-bold text-4xl mb-4"
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '48px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: 'normal',
                  }}
                >
                  Book a space that suits you.
                </p>
                <p
                  className="text-black text-lg mb-8"
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal',
                  }}
                >
                  Be inspired to meet, create and innovate.
                </p>
                <div className="flex justify-center gap-8">
                  {[1, 2, 3].map((imageIndex) => (
                    <div
                      key={imageIndex}
                      className="w-282 h-283 flex-shrink-0"
                      style={{
                        borderRadius: '10px',
                        background: `url(path-to-image-${imageIndex}.jpg), lightgray 50% / cover no-repeat, #D9D9D9`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    

export default Services;