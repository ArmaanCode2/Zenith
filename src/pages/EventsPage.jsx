import React from 'react';
import EventCard from '../components/common/EventCard';
import { eventsData } from '../data/events';
import '../styles/events.css';

function EventsPage() {
  return (
    <div className="events-page">
      <section className="events-hero-section">
        <div className="container">
          <span className="section-label">Events & Activities</span>
          <h1 className="events-page-title">Experiences Beyond the Classroom</h1>
          <p className="events-page-subtitle">
            Zenith CS Club organizes technical competitions, interactive quizzes, campus hunts, and skill-building sessions for SACCM students.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="events-grid">
            {eventsData.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventsPage;
