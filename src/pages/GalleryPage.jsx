import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalCarousel from '../components/common/HorizontalCarousel';
import { getAllEvents } from '../data/events';
import '../styles/gallery.css';

function GalleryPage() {
  const events = getAllEvents();

  return (
    <div className="gallery-page">
      <section className="gallery-hero-section">
        <div className="container">
          <span className="section-label">Gallery</span>
          <h1 className="gallery-page-title">Moments at Zenith</h1>
          <p className="gallery-page-subtitle">
            A look back at events, activities, and moments from Zenith CS Club.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          {events.length >= 3 ? (
            <HorizontalCarousel className="gallery-page-grid">
              {events.map(event => (
                <Link 
                  key={event.id} 
                  to={`/events/${event.id}#gallery`} 
                  className="gallery-cover-card"
                >
                  <img src={event.image} alt={event.title} className="gallery-cover-image" />
                  <div className="gallery-card-overlay">
                    {event.category && <span className="gallery-card-badge">{event.category}</span>}
                    <h3 className="gallery-card-title">{event.title}</h3>
                  </div>
                </Link>
              ))}
            </HorizontalCarousel>
          ) : (
            <div className="gallery-page-grid">
              {events.map(event => (
                <Link 
                  key={event.id} 
                  to={`/events/${event.id}#gallery`} 
                  className="gallery-cover-card"
                >
                  <img src={event.image} alt={event.title} className="gallery-cover-image" />
                  <div className="gallery-card-overlay">
                    {event.category && <span className="gallery-card-badge">{event.category}</span>}
                    <h3 className="gallery-card-title">{event.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
