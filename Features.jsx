// src/pages/Features.jsx
import React from "react";
import "./style.css";

export default function Features() {
  return (
    <div>
      <header className="hero">
        <div className="hero-content">
          <h1>Features</h1>
          <p>Explore the features of E-Chronical and how it helps students.</p>
          <a href="/" className="btn">⬅ Back to Home</a>
        </div>
      </header>

      <section className="section">
        <h2>Core Features</h2>
        <p>⚡ Q&A Forum for Students and Faculty</p>
        <p>⚡ Real-time Announcements</p>
        <p>⚡ Event & Opportunity Listings</p>
        <p>⚡ Alumni Networking</p>
      </section>

      <footer>
        <p>&copy; 2025 E-Chronical | All Rights Reserved</p>
      </footer>
    </div>
  );
}