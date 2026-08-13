import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import HorizontalCarousel from '../components/common/HorizontalCarousel';
import { getEventById } from '../data/events';
import '../styles/events.css';

function EventDetailPage() {
  const { eventId } = useParams();
  const event = getEventById(eventId);

  // Scroll handling: scroll to #gallery or #register-form if hash is present, otherwise scroll to top
  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const elem = document.getElementById(hashId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [eventId]);

  // Handle Event Not Found
  if (!event) {
    return (
      <div className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="placeholder-card" style={{ maxWidth: '540px', margin: '0 auto' }}>
          <span className="section-label">404 — Not Found</span>
          <h2 style={{ margin: '1rem 0' }}>Event Not Found</h2>
          <p className="text-muted" style={{ marginBottom: '1.75rem' }}>
            The event you are looking for does not exist or has been removed.
          </p>
          <Link to="/events" className="btn btn-primary">
            &larr; Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const eventType = event.type || 'event';
  const isRegistration = eventType === 'registration';
  const regStatus = event.registrationStatus || (event.status === 'Registration Open' ? 'open' : 'closed');
  const isFormOpen = isRegistration && regStatus === 'open';

  const hasRounds = event.rounds && event.rounds.length > 0;
  const hasGallery = event.gallery && event.gallery.length > 0;
  const hasWinners = event.winners && event.winners.length > 0;

  return (
    <div className="event-detail-page">
      <section className="event-detail-hero">
        <div className="container">
          <div className="event-detail-hero-grid">
            <div className="event-detail-hero-content">
              <div className="event-meta-tags">
                {event.category && <span className="event-badge category-badge">{event.category}</span>}
                {isRegistration ? (
                  <span className={`event-badge status-badge ${regStatus === 'open' ? 'status-open-badge' : 'status-closed-badge'}`}>
                    {regStatus === 'open' ? 'Registration Open' : regStatus === 'closed' ? 'Registration Closed' : regStatus}
                  </span>
                ) : (
                  event.status && <span className="event-badge status-badge">{event.status}</span>
                )}
              </div>

              <h1 className="event-detail-title">{event.title}</h1>
              {event.date && <div className="event-detail-date">📅 {event.date}</div>}
              {isRegistration && event.registrationDeadline && (
                <div className="event-detail-deadline">⏰ Registration Deadline: {event.registrationDeadline}</div>
              )}
              
              <p className="event-detail-lead">
                {event.shortDescription || event.description}
              </p>

              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {isRegistration && isFormOpen && event.formUrl && (
                  <a href="#register-form" className="btn btn-primary">
                    Register Now &darr;
                  </a>
                )}
                <Link to="/events" className="btn btn-outline" style={{ borderColor: 'var(--color-navy)', color: 'var(--color-navy)' }}>
                  &larr; Back to All Events
                </Link>
              </div>
            </div>

            <div className="event-detail-poster-wrapper">
              <img src={event.image} alt={event.title} className="event-detail-poster" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="event-detail-container">
            <span className="section-label">Overview</span>
            <h2>About the Event</h2>
            <p className="event-full-description">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      {isRegistration && (
        <section id="register-form" className="section bg-light">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-label">Registration</span>
              <h2>Event Registration Form</h2>
              <p className="section-description">
                {isFormOpen 
                  ? 'Fill out the official form below to register for this event.'
                  : 'Official registration status for this event.'}
              </p>
            </div>

            {isFormOpen && event.formUrl ? (
              <div className="google-form-container">
                <iframe
                  src={event.formUrl}
                  title={`${event.title} Registration Form`}
                  width="100%"
                  height="850"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  loading="lazy"
                  className="google-form-iframe"
                >
                  Loading registration form...
                </iframe>
              </div>
            ) : regStatus === 'closed' ? (
              <div className="registration-notice-box closed">
                <div className="notice-icon">🔒</div>
                <h3>Registration Closed</h3>
                <p>Registration for this event is currently closed. Thank you for your interest!</p>
              </div>
            ) : (
              <div className="registration-notice-box coming-soon">
                <div className="notice-icon">📝</div>
                <h3>Registration Coming Soon</h3>
                <p>The official registration form will be available soon. Please check back shortly!</p>
              </div>
            )}
          </div>
        </section>
      )}

      {hasRounds && (
        <section className="section bg-white">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Competition Structure</span>
              <h2>Multi-Round Flow</h2>
              <p className="section-description">
                This event consists of multiple sequential phases designed to test different technical and analytical skills.
              </p>
            </div>

            <div className="rounds-flow-visualization">
              {event.rounds.map((round, index) => (
                <React.Fragment key={round.roundNumber}>
                  <div className="flow-step">
                    <span className="flow-step-number">0{round.roundNumber}</span>
                    <span className="flow-step-title">{round.title}</span>
                    <span className="flow-step-type">{round.type}</span>
                  </div>
                  {index < event.rounds.length - 1 && (
                    <div className="flow-arrow" aria-hidden="true">&rarr;</div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="rounds-timeline-list">
              {event.rounds.map((round) => (
                <div key={round.roundNumber} className="round-detail-card">
                  <div className="round-card-header">
                    <span className="round-badge">Round 0{round.roundNumber}</span>
                    <h3 className="round-card-title">{round.title}</h3>
                    {round.type && <div className="round-card-type">{round.type}</div>}
                  </div>

                  <p className="round-card-description">{round.description}</p>

                  {round.highlights && round.highlights.length > 0 && (
                    <div className="round-highlights">
                      <strong>Round Highlights & Format:</strong>
                      <ul>
                        {round.highlights.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {round.image && (
                    <div className="round-image-wrapper">
                      <img src={round.image} alt={round.title} className="round-image" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasGallery && (
        <section id="gallery" className="section bg-white">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Media</span>
              <h2>Event Photo Gallery</h2>
            </div>

            <HorizontalCarousel className="event-detail-gallery-grid">
              {event.gallery.map((photo, index) => (
                <div key={index} className="event-gallery-item">
                  <img src={photo} alt={`${event.title} moment ${index + 1}`} className="event-gallery-img" />
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        </section>
      )}

      {hasWinners && (
        <section className="section bg-light">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-label">Achievements</span>
              <h2>Winners & Results</h2>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default EventDetailPage;