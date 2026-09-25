import React, { useEffect } from 'react';
import DiscoverWorks from '../components/DiscoverWorks';
import './AboutPage.css';

const WHY_WORK_ITEMS = [
  '+2 years of professional experience',
  'Tailored, unique and strategic design',
  'Strong aesthetic sense (branding, UI/UX & web design)',
  'Clear communication & smooth collaboration',
  'Attention to detail and brand consistency',
  'Versatile and adaptable to different industries'
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page-about-clone">
      
      {/* 1. Hero Stage Section matching reference image structure */}
      <section className="about-hero-stage-section" data-aos="fade-down">
        <div className="about-hero-stage-container">

          {/* Top-Left Overlapping Photos Duo */}
          <div className="about-hero-top-left-duo" data-aos="fade-down-right" data-aos-delay="100">
            {/* Top Right Overlap Image: vidhi_black_vest.png */}
            <div className="duo-photo-card photo-back">
              <img
                src="/assets/vidhi_black_vest.png"
                alt="Vidhi in black vest blazer"
                className="duo-photo-img img-vest"
              />
            </div>
            {/* Top Left Front Image: vidhi_black_tee.png */}
            <div className="duo-photo-card photo-front">
              <img
                src="/assets/vidhi_black_tee.png"
                alt="Vidhi working on laptop"
                className="duo-photo-img img-tee"
              />
            </div>
          </div>

          {/* Top-Right Serif Quote with Hand-drawn Underline */}
          <div className="about-hero-top-right-quote" data-aos="fade-down-left" data-aos-delay="150">
            <p className="adapting-quote-text serif">
              "Always adapting to each<br />
              project's <span className="underline-word">personality"
                <svg
                  className="personality-underline-svg"
                  viewBox="0 0 140 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3 3.5 C 45 2, 92 4.5, 136 5.5"
                    stroke="#0055cb"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 9 C 48 7.5, 96 10, 138 9.5"
                    stroke="#0055cb"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </p>
          </div>

          {/* Center Main Headline & Bio Content */}
          <div className="about-hero-center-bio" data-aos="zoom-in" data-aos-delay="50">
            <h1 className="about-hero-main-title">
              Hello! I'm Vidhi, creative ui/ux designer with over 2+ years of experience.
            </h1>
            <p className="about-hero-subtext">
              I help creators and businesses turn their ideas into something more — designs that feel intentional, aligned and full of personality.
            </p>
          </div>

          {/* Bottom-Left Languages Quote with Curved Arrow */}
          <div className="about-hero-bottom-left-languages" data-aos="fade-up-right" data-aos-delay="200">
            <svg
              className="fluent-arrow-svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M36 6 C 28 18, 15 18, 11 34"
                stroke="#0055cb"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              <path
                d="M4 25 L 11 35 L 20 31"
                stroke="#0055cb"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="fluent-languages-text serif">
              Fluent in English, Hindi and Gujarati.
            </p>
          </div>

          {/* Bottom-Right Portrait with Lightning Bolt & Yellow Badge */}
          <div className="about-hero-bottom-right-portrait" data-aos="fade-up-left" data-aos-delay="250">
            {/* Blue Lightning Bolt Sticker */}
            <div className="lightning-sticker" aria-hidden="true">
              <svg width="45" height="128" viewBox="0 0 45 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M33 2 L2 65 L21 65 L2 126 L43 51 L22 51 Z"
                  stroke="#0055cb"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Portrait Image Card */}
            <div className="portrait-photo-card">
              <img
                src="/assets/portfolio_her_image.png"
                alt="Vidhi - UI/UX Designer"
                className="portrait-photo-img"
              />
            </div>

            {/* Circular Yellow "not just pretty, but smart" Badge with 5-pointed star */}
            <div className="soft-powerful-badge" aria-hidden="true">
              <svg viewBox="0 0 100 100" className="badge-circular-svg">
                <path
                  id="aboutpage-badge-path"
                  d="M 15.28 42.62 A 35.5 35.5 0 1 1 24.90 75.10"
                  fill="none"
                />
                <text className="badge-curved-text" fill="#0055cb">
                  <textPath href="#aboutpage-badge-path" startOffset="0%">
                    not just pretty, but smart •
                  </textPath>
                </text>
                <polygon
                  points="50.00,38.00 53.00,45.80 61.20,46.30 55.00,51.60 57.00,59.50 50.00,55.00 43.00,59.50 45.00,51.60 38.80,46.30 47.00,45.80"
                  fill="#0055cb"
                />
              </svg>
            </div>
          </div>

        </div>
      </section>

      {/* 2. "why work with me?" Yellow Section */}
      <section className="about-why-work-section" data-aos="fade-up">
        <div className="about-why-work-container">
          
          {/* Left Column: Photo & Sticker */}
          <div className="why-work-left" data-aos="fade-right" data-aos-delay="100">
            <div className="why-work-photo-frame">
              <img
                src="/assets/vidhi.png"
                alt="Vidhi - Creative UI/UX Designer"
                className="why-work-img"
              />
              {/* Floating tilted sticker */}
              <div className="why-work-floating-sticker">
                <span className="sticker-bold">not just pretty,</span>
                <span className="sticker-italic serif">but smart</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title + 6 Bullet Items + Button */}
          <div className="why-work-right" data-aos="fade-left" data-aos-delay="150">
            <h2 className="why-work-title">why work with me?</h2>

            <div className="why-work-list">
              {WHY_WORK_ITEMS.map((item, index) => (
                <div key={index} className="why-work-item">
                  <div className="why-work-arrow-icon" aria-hidden="true">
                    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" stroke="#0055cb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="2" y1="10" x2="22" y2="10" />
                      <polyline points="14 2 22 10 14 18" />
                    </svg>
                  </div>
                  <span className="why-work-item-text">{item}</span>
                </div>
              ))}
            </div>

            <div className="why-work-cta-wrap">
              <a href="#work-with-me" className="btn-lets-work">
                LET'S WORK TOGETHER
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Discover My Works Drag Scroller */}
      <DiscoverWorks />

    </div>
  );
};

export default AboutPage;
