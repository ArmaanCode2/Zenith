import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container">
      <div className="placeholder-card" style={{ maxWidth: '600px', margin: '3rem auto' }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>404</h2>
        <h3>Page Not Found</h3>
        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
          The requested page does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
