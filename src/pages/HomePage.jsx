import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/common/EventCard';
import MemberCard from '../components/common/MemberCard';
import '../styles/home.css';

function HomePage() {
  return (
    <div className="home-page">
      {}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="section-label">Zenith CS Club</span>
              <h1 className="hero-title">Learn. Build. Compete. Explore.</h1>
              <p className="hero-subtitle">
                The Computer Science club at Sri Aurobindo College of Commerce and Management (SACCM), engaging BCA students through technical challenges, competitive quizzes, campus hunts, and collaborative learning.
              </p>
              <div className="hero-cta-group">
                <Link to="/events" className="btn btn-primary">
                  Explore Events
                </Link>
                <Link to="/about" className="btn btn-outline">
                  About Zenith
                </Link>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-image-card">
                <img 
                  src="/club/1.jpg" 
                  alt="Zenith CS Club Event" 
                  className="hero-image" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="section bg-white">
        <div className="container">
          <div className="intro-container">
            <span className="section-label">Who We Are</span>
            <h2>More Than a Classroom</h2>
            <p className="section-description">
              Zenith CS Club provides opportunities for students to engage with computer science beyond standard academic course. Through technical activities, logic competitions, problem-solving challenges, and interactive campus events, students apply their knowledge in practical and collaborative ways.
            </p>
            <Link to="/about" className="link-arrow">
              About Zenith &rarr;
            </Link>
          </div>
        </div>
      </section>

      {}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Core Pillars</span>
            <h2>What We Do</h2>
            <p className="section-description">
              Our activities focus on enhancing practical technical skills and fostering a strong student community.
            </p>
          </div>

          <div className="pillars-grid">
            {}
            <div className="pillar-card">
              <div className="pillar-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="pillar-title">Technical Activities</h3>
              <p className="pillar-description">
                Practical experiences involving technology, programming, database systems, and computer science concepts.
              </p>
            </div>

            {}
            <div className="pillar-card">
              <div className="pillar-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0011 15.9V18H8v2h8v-2h-3v-2.1c2.06-.41 3.68-1.99 4.39-4.04C19.08 11.63 21 9.55 21 7V5c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                </svg>
              </div>
              <h3 className="pillar-title">Competitions & Quizzes</h3>
              <p className="pillar-description">
                Events that challenge technical knowledge, logical thinking, speed, and analytical problem-solving skills.
              </p>
            </div>

            {}
            <div className="pillar-card">
              <div className="pillar-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h3 className="pillar-title">Interactive Events</h3>
              <p className="pillar-description">
                Creative formats combining technology, physical clue hunts around campus, puzzles, and active exploration.
              </p>
            </div>

            {}
            <div className="pillar-card">
              <div className="pillar-icon-wrapper">
                <svg viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="pillar-title">Teamwork & Community</h3>
              <p className="pillar-description">
                Opportunities for students to collaborate, organize activities, exchange ideas, and build peer connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Highlighted Event Format</span>
            <h2>Multi-Round Competition Showcase</h2>
            <p className="section-description">
              Zenith events often feature multi-phase formats combining digital challenges with physical campus activities.
            </p>
          </div>

          <div className="featured-event-container">
            <div className="featured-event-grid">
              <div className="featured-event-body">
                <span className="section-label">Case Files treasure hunt</span>
                <h3 className="featured-event-title">Flagship Multi-Round Tech Event</h3>
                <p className="text-muted">
                  An interactive multi-stage competition structure designed to test both digital proficiency and physical puzzle solving around campus.
                </p>

                <div className="rounds-timeline">
                  <div className="round-item">
                    <div className="round-details">
                      <span className="round-badge">Round 01</span>
                      <h4>Interactive Quiz</h4>
                      <p>
                        A web-based quiz platform developed using PHP with database-backed data storage to evaluate technical concepts and speed.
                      </p>
                    </div>
                  </div>

                  <div className="round-item">
                    <div className="round-details">
                      <span className="round-badge">Round 02</span>
                      <h4>Campus Hunt</h4>
                      <p>
                        A physical puzzle hunt starting with a clue slip that directs participants through multiple campus locations to reach the final answer.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <Link to="/events" className="btn btn-primary">
                    View Event Details
                  </Link>
                </div>
              </div>

              <div className="featured-event-media">
                <img 
                  src="/club/case-file.jpg" 
                  alt="Zenith CS Club Event" 
                  className="hero-image" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Club Activities</span>
            <h2>Recent Activities</h2>
            <p className="section-description">
              A look at recent and upcoming activities organized by Zenith CS Club.
            </p>
          </div>

          <div className="events-grid">
            {}
            <EventCard 
              category="Multi-Round Event"
              title="Campus Hunt"
              date="Case Files"
              description="A clue-based physical campus hunt. Participants gather clues to find the final answer for the puzzle"
              detailsLink="/events"
            />

            {}
            <EventCard 
              image="public/club/29-07-26.jpg"
              category="Orientation 2026"
              title="Introduction & quiz"
              date="Orientation 2026"
              description="A session held for first year students introducing the Zenith CS club."
              detailsLink="/events"
            />

            {}
            <EventCard 
              image="public/club/case-file-quiz.png"
              category="Multi-Round Event"
              title="Web-based quiz"
              date="Case files first round"
              description="Online quiz as the first round in the case files event ."
              detailsLink="/events"
            />
          </div>
        </div>
      </section>

      {}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Our Community</span>
            <h2>Meet the Team</h2>
            <p className="section-description">
              Zenith CS Club is driven by enthusiastic BCA students under the guidance of college faculty members.
            </p>
          </div>

          <div className="team-preview-grid">
            <MemberCard 
              image="/team/mayank.jpg"
              badge="Student Coordinator"
              namePlaceholder="Mayank Goyal"
              // rolePlaceholder="Faculty In-Charge"
            />
            <MemberCard 
              badge="Student Leadership"
              namePlaceholder="[ Student Lead Placeholder ]"
              rolePlaceholder="Club Lead / President"
            />
            <MemberCard 
              badge="Core Team"
              namePlaceholder="[ Member Placeholder ]"
              rolePlaceholder="Event Coordinator / Core Member"
            />
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/team" className="btn btn-outline">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-label">Visual Memories</span>
            <h2>Moments at Zenith</h2>
            <p className="section-description">
              Snapshots from our interactive events, technical quizzes, and campus activities.
            </p>
          </div>

          <div className="gallery-grid-preview">
            <div className="gallery-item-placeholder">
              <span>[ Event Photo 1 Placeholder ]</span>
            </div>
            <div className="gallery-item-placeholder">
              <span>[ Quiz Round Photo 2 Placeholder ]</span>
            </div>
            <div className="gallery-item-placeholder">
              <span>[ Campus Hunt Photo 3 Placeholder ]</span>
            </div>
            <div className="gallery-item-placeholder">
              <span>[ Team Photo 4 Placeholder ]</span>
            </div>
            <div className="gallery-item-placeholder">
              <span>[ Workshop Photo 5 Placeholder ]</span>
            </div>
            <div className="gallery-item-placeholder">
              <span>[ Ceremony Photo 6 Placeholder ]</span>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/gallery" className="btn btn-outline">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {}
      <section className="section bg-white" style={{ paddingBottom: '5rem' }}>
        <div className="container">
          <div className="cta-box">
            <h2>Be Part of What's Next.</h2>
            <p>
              Interested in joining activities or learning more about Zenith CS Club at SACCM? Explore our events or reach out to us.
            </p>
            <div className="cta-button-group">
              <Link to="/events" className="btn btn-primary">
                Explore Events
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
