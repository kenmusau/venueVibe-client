import React, { useContext } from 'react';
import Navbar from '../landingpage/Navbar';
import UserContext from '../Homepage/UserContext';
import { Link } from 'react-router-dom';
import '../Homepage/Home.css'; 
import images1 from '../../images/img1.jpg';
 

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto text-center flex flex-col items-center justify-center">
        <div className="image-container">
          <img
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)',
              borderRadius: 10,
            }}
            src={images1}
            alt="Placeholder Image"
          />
        </div>

        <div className="text-container">
          <h1 className="title pt-4">Venue-Vibe</h1>
          <h4 className="subtitle mt-2">
            Find a space. Fulfill your vision.
          </h4>
          {currentUser ? (
            <h2 className="mt-5">Welcome back, {currentUser.firstName}!</h2>
          ) : (
            <div>
              <h5 className="mt-3 mb-3">Welcome to Venue-Vibe!</h5>
              <p>
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
      </div>
    </div>
  );
}

export default Home;



