import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ image, category, title, date, description, detailsLink = "/events" }) {
  return (
    <div className="event-card">
      <div className="event-card-image-wrapper">
        {image ? (
          <img src={image} alt={title} className="event-card-image" />
        ) : (
          <div className="event-card-placeholder-image">
            <span>[ Event Photo / Poster Placeholder ]</span>
          </div>
        )}
        {category && <span className="event-card-category">{category}</span>}
      </div>

      <div className="event-card-content">
        {date && <div className="event-card-date">{date}</div>}
        <h3 className="event-card-title">{title}</h3>
        <p className="event-card-description">{description}</p>
        <Link to={detailsLink} className="event-card-link">
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}

export default EventCard;
