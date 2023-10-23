import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
        <div className='nav-div'>
            <Link to="/"><h3><span>Venue</span>vibe</h3></Link>
            <div className='links'>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact-us">Contact Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar