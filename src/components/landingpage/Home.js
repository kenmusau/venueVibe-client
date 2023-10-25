import React, { useContext } from 'react';
import Navbar from '../landingpage/Navbar';
import UserContext from '../landingpage/UserContext';
import { Link } from 'react-router-dom';
import '../landingpage/Home.css'; 
import images1 from '../../images/img1.jpg';

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="full-screen">
      <Navbar />
      <div className="container mx-auto text-center flex items-center justify-center flex-col h-full">
        <div className="text-container">
          <h1 className="title" style={{ color: 'black', fontSize: '3rem', fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word',  marginBottom: '0'}}>
          Find a space. Fulfill your vision.
          </h1>

          {currentUser ? (
            <h2 className="mt-5">Welcome back, {currentUser.firstName}!</h2>
          ) : (
            <div>
              <h5 className="mt-3 mb-3">Welcome to Venue-Vibe!</h5>
              <p className="description" style={{ color: 'rgba(0, 0, 0, 0.60)', fontSize: '1.5rem', fontFamily: 'Inter', fontWeight: '500', lineHeight: '2rem', wordWrap: 'break-word' }}>
                Welcome to Venue-Vibe, a platform that will bring people together to meet, create, and celebrate. Our main aim is to develop a community of like-minded people.
              </p>
              <Link to="/signup" className="custom-button">
                <div className="custom-button-text">Sign Up</div>
              </Link>
              <Link to="/login" className="custom-button">
                <div className="custom-button-text">Login</div>
              </Link>
            </div>
          )}
        </div>

        <div className="container mx-auto text-center flex flex-col items-center justify-center">
          <div className="image-container">
            <img
              src={images1}
              alt="Image Placeholder"
              style={{ width: '100%', height: '100%', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

