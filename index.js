import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <img className="logo" src="/logo.png" alt="Peakform Logo" />
        <div className="title">Unleash your creativity with Peakform</div>
        <div className="sub-title">Build the perfect website tailored to your needs</div>
      </header>

      <div className="next-btn-container">
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}

export default LandingPage;
