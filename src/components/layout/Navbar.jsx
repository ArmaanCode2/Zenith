import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          {}
          <button
            className="nav-toggle"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span>Navigation Menu</span>
            <div className="hamburger-icon">
              <span className="hamburger-bar bar-1"></span>
              <span className="hamburger-bar bar-2"></span>
              <span className="hamburger-bar bar-3"></span>
            </div>
          </button>

          {}
          <ul className={`nav-menu ${isOpen ? 'is-open' : ''}`}>
            <li className="nav-item">
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/events" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/team" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
