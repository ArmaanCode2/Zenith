import React from 'react';

function MemberCard({ rolePlaceholder, namePlaceholder, badge }) {
  return (
    <div className="member-card">
      <div className="member-avatar-placeholder">
        <div className="avatar-icon">👤</div>
        <span>[ Photo Placeholder ]</span>
      </div>
      <div className="member-card-content">
        {badge && <span className="member-badge">{badge}</span>}
        <h4 className="member-name">{namePlaceholder}</h4>
        <p className="member-role">{rolePlaceholder}</p>
      </div>
    </div>
  );
}

export default MemberCard;
