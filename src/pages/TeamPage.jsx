import React from 'react';
import MemberCard from '../components/common/MemberCard';
import HorizontalCarousel from '../components/common/HorizontalCarousel';
import { getGroupedMembers } from '../data/members';
import '../styles/team.css';

function TeamPage() {
  const groupedMembers = getGroupedMembers();
  const groupEntries = Object.entries(groupedMembers);

  return (
    <div className="team-page">
      <section className="team-hero-section">
        <div className="container">
          <span className="section-label">Team</span>
          <h1 className="team-page-title">Meet the People Behind Zenith</h1>
          <p className="team-page-subtitle">
            Zenith CS Club is organized and run by passionate BCA students under the guidance of college faculty members.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          {groupEntries.length > 0 ? (
            groupEntries.map(([groupName, membersList]) => (
              <div key={groupName} className="team-group-section">
                <h3 className="team-group-title">{groupName}</h3>

                {membersList.length >= 3 ? (
                  <HorizontalCarousel className="team-preview-grid">
                    {membersList.map(member => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </HorizontalCarousel>
                ) : (
                  <div className={`team-group-grid count-${membersList.length}`}>
                    {membersList.map(member => (
                      <MemberCard key={member.id} member={member} />
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="placeholder-card">
              <h3>No team members listed</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default TeamPage;