import React from 'react';

function MemberCard({ member, image, rolePlaceholder, namePlaceholder, badge, name, role }) {
  const cardImage = image || (member ? member.image : null);
  const cardName = name || namePlaceholder || (member ? member.name : '');
  const cardRole = role || rolePlaceholder || (member ? member.role : '');
  const cardBadge = badge || (member ? member.role : null);

  return (
    <div className="member-card">
      {cardImage ? (
        <img src={cardImage} alt={cardName} className="member-avatar-image" />
      ) : (
        <div className="member-avatar-placeholder">
          <div className="avatar-icon">👤</div>
          <span>[ Photo Placeholder ]</span>
        </div>
      )}

      <div className="member-card-content">
        {cardBadge && <span className="member-badge">{cardBadge}</span>}
        <h4 className="member-name">{cardName}</h4>
      </div>
    </div>
  );
}

export default MemberCard;
