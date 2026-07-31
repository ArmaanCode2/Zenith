import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {}
          <div className="footer-column">
            <h4>Zenith CS Club</h4>
            <p>
              The official Computer Science club of Sri Aurobindo College of Commerce and Management (SACCM), primarily engaging BCA students in technical, competitive, and interactive learning events.
            </p>
          </div>

          {}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/team">Team & Members</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {}
          <div className="footer-column">
            <h4>Institution</h4>
            <p className="footer-placeholder-info">
              <strong>Sri Aurobindo College of Commerce and Management</strong><br />
              Ludhiana, Punjab<br />
              Affiliated with Panjab University
            </p>
          </div>

          {}
          <div className="footer-column">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><span className="text-muted"><a href="mailto:zenithcsclub@saccm.in">Email: zenithcsclub@saccm.in</a></span></li>
              <li><span className="text-muted"><a href="https://www.instagram.com/saccm_zenith" target='_blank'>Official: Zenith instagram</a></span></li>
            </ul>
          </div>
        </div>

        {}
        <div className="footer-bottom">
          <div>
            &copy; {currentYear} Zenith CS Club — Sri Aurobindo College of Commerce and Management (SACCM). All rights reserved.
          </div>
          <div>
            Department of Computer Science (BCA)
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
