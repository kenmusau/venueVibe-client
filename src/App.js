import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/landingpage/AboutUs';
import ContactUs from './components/landingpage/ContactUs';
import Services from './components/landingpage/Services';
import Home from './components/Homepage/Home';
import UserContext from './components/Homepage/UserContext';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value={{ currentUser, setCurrentUser}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
