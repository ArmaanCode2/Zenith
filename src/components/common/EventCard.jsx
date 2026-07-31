import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event, image, category, title, date, description, detailsLink }) {
  const eventId = event ? event.id : null;
  const cardImage = image || (event ? event.image : null);
  const cardCategory = category || (event ? event.category : null);
  const cardTitle = title || (event ? event.title : '');
  const cardDate = date || (event ? event.date : null);
  const cardDescription = description || (event ? (event.shortDescription || event.description) : '');
  const targetLink = detailsLink || (eventId ? `/events/${eventId}` : '/events');

  return (
    <div className="event-card">
      <div className="event-card-image-wrapper">
        {cardImage ? (
          <img src={cardImage} alt={cardTitle} className="event-card-image" />
        ) : (
          <div className="event-card-placeholder-image">
            <span>[ Event Photo / Poster Placeholder ]</span>
          </div>
        )}
        {cardCategory && <span className="event-card-category">{cardCategory}</span>}
      </div>

      <div className="event-card-content">
        {cardDate && <div className="event-card-date">{cardDate}</div>}
        <h3 className="event-card-title">{cardTitle}</h3>
        <p className="event-card-description">{cardDescription}</p>
        <Link to={targetLink} className="event-card-link">
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
