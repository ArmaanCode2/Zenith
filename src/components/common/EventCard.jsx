import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event, image, category, title, date, description, detailsLink }) {
  const eventId = event ? event.id : null;
  const eventType = (event && event.type) || 'event';
  const isRegistration = eventType === 'registration';
  const regStatus = event ? event.registrationStatus : null;

  const cardImage = image || (event ? event.image : null);
  const cardCategory = category || (event ? event.category : null);
  const cardTitle = title || (event ? event.title : '');
  const cardDate = date || (event ? event.date : null);
  const cardDescription = description || (event ? (event.shortDescription || event.description) : '');
  const targetLink = detailsLink || (eventId ? `/events/${eventId}` : '/events');

  let ctaText = 'View Details \u2192';
  let statusVariantClass = '';

  if (isRegistration) {
    if (regStatus === 'open') {
      ctaText = 'Register Now \u2192';
      statusVariantClass = 'registration-card-open';
    } else if (regStatus === 'closed') {
      ctaText = 'View Event \u2192';
      statusVariantClass = 'registration-card-closed';
    } else if (regStatus === 'coming-soon') {
      ctaText = 'View Event \u2192';
      statusVariantClass = 'registration-card-coming';
    } else {
      ctaText = 'Register Now \u2192';
      statusVariantClass = 'registration-card-open';
    }
  }

  return (
    <Link to={targetLink} className="event-card-wrapper-link">
      <div className={`event-card ${statusVariantClass}`}>
        <div className="event-card-image-wrapper">
          {cardImage ? (
            <img src={cardImage} alt={cardTitle} className="event-card-image" />
          ) : (
            <div className="event-card-placeholder-image">
              <span>[ Event Photo / Poster Placeholder ]</span>
            </div>
          )}
          
          <div className="event-card-badges">
            {cardCategory && <span className="event-card-category">{cardCategory}</span>}
            {isRegistration && (regStatus === 'open' || (!regStatus && isRegistration)) && (
              <span className="event-card-status-badge status-open">Registration Open</span>
            )}
            {isRegistration && regStatus === 'closed' && (
              <span className="event-card-status-badge status-closed">Registration Closed</span>
            )}
            {isRegistration && regStatus === 'coming-soon' && (
              <span className="event-card-status-badge status-coming">Coming Soon</span>
            )}
          </div>
        </div>

        <div className="event-card-content">
          {cardDate && <div className="event-card-date">📅 {cardDate}</div>}
          <h3 className="event-card-title">{cardTitle}</h3>
          <p className="event-card-description">{cardDescription}</p>
          <span className="event-card-cta-text">{ctaText}</span>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;