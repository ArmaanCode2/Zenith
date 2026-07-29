import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      {}
      <div className="header-top-bar">
        <div className="container header-top-content">
          <span className="institutional-affiliation">
            Affiliated with Panjab University, Chandigarh
          </span>
        </div>
      </div>

      {}
      <div className="header-brand-bar">
        <div className="container header-brand-container">
          <Link to="/" className="brand-identity-link">
            <div className="brand-logo-wrapper">
              <img 
                src="/logo/circle.png" 
                alt="Zenith CS Club — SACCM Logo" 
                className="header-club-logo" 
              />
            </div>

            <div className="brand-text">
              <h1 className="club-title">Zenith CS Club</h1>
              <div className="college-subtitle">
                Sri Aurobindo College of Commerce and Management
              </div>
              <div className="department-tag">
                Department of Computer Science (BCA)
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
