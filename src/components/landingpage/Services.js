import React from 'react';
import Navbar from './Navbar';
import './Services.css';

const servicesData = [
  {
    title: 'Space Booking',
    description: 'Allow users to book spaces for events, meetings, workshops, conferences, or other activities.',
    imageUrl: '/images/placeholder1.jpg', 
  },
  {
    title: 'Event Planning Assistance',
    description: 'Provide event planning services, including support with logistics, catering, and other arrangements.',
    imageUrl: '/images/placeholder2.jpg', 
  },
  {
    title: 'Conference Facilities',
    description: 'Offer larger spaces with audio-visual equipment for conferences and seminars.',
    imageUrl: '/images/placeholder3.jpg',
  },
  {
    title: 'Technology Support',
    description: 'Ensure spaces are equipped with reliable Wi-Fi, projectors, screens, and other technology necessary for presentations and meetings.',
    imageUrl: '/images/placeholder4.jpg', 
  },
];

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div key={index} className={`service  ${index % 2 === 0 ? 'image-grid-row-2' : ''}`}>
            <img
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
          <div className='text-container'>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Services;


