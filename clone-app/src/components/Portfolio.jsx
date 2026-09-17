import React, { useState } from 'react';
import InteractiveImageShowcase, { PROJECTS_DATA } from './InteractiveImageShowcase';
import './Portfolio.css';

const Portfolio = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  return (
    <section id="work" className="portfolio-section">
      {/* Decorative Stickers */}
      <div className="sticker-container" data-aos="fade-down" data-aos-delay="100">
        <div className="sticker-yellow">
          <svg viewBox="0 0 100 100" className="rotating-text">
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
            <text fill="#1b4aba" fontSize="11" fontWeight="bold">
              <textPath href="#circlePath" startOffset="0%">not just pretty, but smart •</textPath>
              <textPath href="#circlePath" startOffset="50%">not just pretty, but smart •</textPath>
            </text>
          </svg>
          <div className="sticker-yellow-center">★</div>
        </div>

        <div className="sticker-blue">
          <img
            src="/assets/2.svg"
            alt="Built from your essence - Vidhi Creative Design Studio"
            className="sticker-blue-img"
          />
        </div>
      </div>

      {/* Purpose Header matching reference image */}
      <div className="purpose-header" data-aos="fade-up" data-aos-delay="150">
        <h2>designed with</h2>
        <h2 className="serif purpose-accent">
          purpose
          <svg className="purpose-underline" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M5,15 Q50,5 95,15 M10,20 Q50,10 90,20" stroke="#1b4aba" fill="none" strokeWidth="1.5" />
          </svg>
        </h2>
        <svg className="purpose-arrow" width="30" height="40" viewBox="0 0 24 40" fill="none" stroke="#1b4aba" strokeWidth="2">
          <path d="M20 2 Q 5 15, 10 30" fill="none" />
          <path d="M5 25 L10 30 L15 25" fill="none" />
        </svg>
      </div>

      {/* Interactive Showcase matching reference screenshots */}
      <div className="portfolio-showcase-wrap" data-aos="zoom-in" data-aos-delay="250">
        <InteractiveImageShowcase
          projects={PROJECTS_DATA}
          activeProjectIndex={activeProjectIndex}
          onProjectChange={setActiveProjectIndex}
        />
      </div>
    </section>
  );
};

export default Portfolio;
