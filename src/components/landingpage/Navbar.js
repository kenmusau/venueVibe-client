import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
   <nav className="w-full h-16 bg-gray-300 flex items-center justify-between px-8">
   <NavLink to="/" className="text-xl font-bold">
    VenueVibe
   </NavLink>

   <ul className="flex gap-4">
    <li>
        <NavLink to="/about" className="nav-link" activeClassName="active-link">
        About Us
        </NavLink>
    </li>
    <li>
        <NavLink to="/services" className="nav-link" activeClassName="active-link">
        Services
        </NavLink>
    </li>
    <li>
        <NavLink to="/contact" className="nav-link" activeClassName="active-link">
        Contact Us
        </NavLink>
    </li>
   </ul>
   </nav>
  );
}

export default Navbar;