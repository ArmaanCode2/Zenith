import React, { useState } from 'react';
import EventCard from '../components/common/EventCard';
import { eventsData } from '../data/events';
import '../styles/events.css';

function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredEvents = eventsData.filter(event => {
    if (activeFilter === 'All') return true;
    return event.category === activeFilter;
  });

  const categories = ['All', ...new Set(eventsData.map(e => e.category))];

  return (
    <div className="events-page">
      <section className="events-hero-section">
        <div className="container">
          <span className="section-label">Events & Activities</span>
          <h1 className="events-page-title">Experiences Beyond the Classroom</h1>
          <p className="events-page-subtitle">
            Zenith CS Club organizes technical competitions, interactive quizzes, campus hunts, and skill-building sessions for SACCM students.
          </p>

          <div className="events-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          {filteredEvents.length > 0 ? (
            <div className="events-grid">
              {filteredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="placeholder-card">
              <h3>No events found in this category</h3>
              <p className="text-muted">Select another filter to view Zenith activities.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default EventsPage;
