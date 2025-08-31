import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>E-Chronical</h1>
          <p>Intra Campus Information Hub – Stay Connected, Stay Updated</p>
          <Link to="/features" className="btn">Explore Features</Link>
          <Link to="/signin" className="btn">Sign In</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </header>

      <section className="section" id="about">
        <h2>About E-Chronical</h2>
        <p>
          E-Chronical is a digital platform that connects admins, faculty, and
          students, enabling seamless access to departmental updates, sessions,
          activities, donations, and feedback in one place.
        </p>
      </section>

      <section className="section" id="features">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Updates</h3>
            <p>Get instant departmental updates and announcements.</p>
            <Link to="/updates" className="btn">View Updates</Link>
          </div>
          <div className="feature-card">
            <h3>Sessions</h3>
            <p>Access live, upcoming, and past sessions with ease.</p>
          </div>
          <div className="feature-card">
            <h3>Activities</h3>
            <p>Explore student and faculty activities in real-time.</p>
          </div>
          <div className="feature-card">
            <h3>Donations</h3>
            <p>Support causes and contribute through campus donations.</p>
          </div>
          <div className="feature-card">
            <h3>Feedback</h3>
            <p>Share your thoughts to improve the campus ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="section" id="updates-section">
        <h2>Updates</h2>
        <p>Choose Past, Current, or Future announcements.</p>
        <div className="features">
          <div className="feature-card">
            <h3>Past Updates</h3>
            <p>Explore old departmental news and announcements.</p>
            <Link to="/updates/past" className="btn">View Past</Link>
          </div>
          <div className="feature-card">
            <h3>Current Updates</h3>
            <p>Check what’s happening on campus right now.</p>
            <Link to="/updates/current" className="btn">View Current</Link>
          </div>
          <div className="feature-card">
            <h3>Future Updates</h3>
            <p>See what’s planned for the coming months.</p>
            <Link to="/updates/future" className="btn">View Future</Link>
          </div>
        </div>
      </section>

      <section className="section cta">
        <h2>Join E-Chronical Today 🚀</h2>
        <p>Be a part of the digital campus revolution. Stay connected, stay updated!</p>
        <Link to="/signup" className="btn">Get Started</Link>
      </section>

      <footer>
        <p>&copy; 2025 E-Chronical | All Rights Reserved</p>
      </footer>
    </>
  );
}