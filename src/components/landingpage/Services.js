import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Services.css';

function Services() {
    const [spaces, setSpaces] = useState([]);

    useEffect(() => {
        // Fetch spaces from the backend 
        fetch('')
            .then(response => response.json())
            .then(data => setSpaces(data))
            .catch(error => console.error('Error fetching spaces:', error));
    }, []);

    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h2
                        className="text-4xl font-bold mb-8 service-title">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {spaces.map((space, index) => (
                            <Link key={index} to={`/spaces/${space.id}`}>
                                <div className="bg-white p-6 rounded-md shadow-md">
                                    <h3
                                        className="text-xl font-bold mb-4 service-name">
                                        {space.name}
                                    </h3>
                                    <p className="text-gray-600 service-description">
                                        {space.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <div className="w-732 h-88 flex-shrink-0">
                        <p
                            className="text-black font-bold text-4xl mb-4">
                            Book a space that suits you.
                        </p>
                        <p
                            className="text-black text-lg mb-8">
                            Be inspired to meet, create and innovate.
                        </p>

                        <div className="flex justify-center gap-8">
                            {[1, 2, 3].map((imageIndex) => (
                                <div
                                    key={imageIndex}
                                    className="w-282 h-283 flex-shrink-0"
                                    style={{
                                        borderRadius: '10px',
                                        background: `url(path-to-image-${imageIndex}.jpg) lightgray 50% / cover no-repeat, #D9D9D9`,
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
