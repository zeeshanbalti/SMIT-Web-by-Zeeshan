import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://smit-event-seven.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.23caaf7f.png&w=640&q=75"Linklt="Logo" />
      </div>
      <label htmlFor="toggle" className="toggle-label">&#9776;</label>
      <input type="checkbox" id="toggle" className="toggle" />
      <ul className="nav-links">
        <li><Link to="/">About</Link></li>
        <li><Link to="/Event Time Line">Event Time Line</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
