import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'


function Landing() {

    const navigate = useNavigate()

    function handleStart(){
        navigate("/signup")
    }
  return (
    <div className='home'>
        <Routes>
            {/* <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact-us" element={<ContactUs/>}/> */}
        </Routes>
        <Navbar/>
        <div className='home-content'>
            <div className='left-home'>
                <div className='heading'>
                    <h2>Find a space</h2>
                    <h2>Fulfill your vision.</h2>
                </div>
                <p>Welcome to Venue-Vibe, a platform that will bring people together to meet, create and celebrate. Our main aim being to develop a community of like minded people.</p>
                <div className='home-button-div'>
                    <button onClick={handleStart}>Get Started</button>
                </div>
            </div>
            <div className='right-home'>
                <img src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwc3BhY2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt='home-image'/>
            </div>
        </div>
    </div>
  )
}

export default Landing