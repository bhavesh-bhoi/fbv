import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-wrapper-outer">
      <div className="about-main-section">
        <div className="about-stage-container">

          {/* 1. Top-Left Overlapping Photos Duo */}
          <div className="about-top-left-duo" data-aos="fade-down-right" data-aos-duration="800">
            {/* Top Right Overlap Image: vidhi_black_vest.png */}
            <div className="duo-photo-card photo-back">
              <img
                src="/assets/vidhi_black_vest.png"
                alt="Vidhi in black blazer vest"
                className="duo-photo-img img-vest"
                loading="lazy"
              />
            </div>
            {/* Top Left Image: vidhi_black_tee.png */}
            <div className="duo-photo-card photo-front">
              <img
                src="/assets/vidhi_black_tee.png"
                alt="Vidhi working on laptop"
                className="duo-photo-img img-tee"
                loading="lazy"
              />
            </div>
          </div>

          {/* 2. Top-Right Serif Quote with Hand-drawn Underline */}
          <div className="about-top-right-quote" data-aos="fade-down-left" data-aos-duration="800">
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

          {/* 3. Center Bio Typography */}
          <div className="about-center-bio" data-aos="fade-up" data-aos-duration="850">
            <h2 className="about-main-headline">
              Hello! I'm Vidhi, creative ui/ux designer with over 2+ years of experience.
            </h2>
            <p className="about-main-subtext">
              I help creators and businesses turn their ideas into something more — designs that feel intentional, aligned and full of personality.
            </p>
          </div>

          {/* 4. Bottom-Left Languages Quote with Curved Arrow */}
          <div className="about-bottom-left-languages" data-aos="fade-up-right" data-aos-duration="800">
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

          {/* 5. Bottom-Right Portrait with Lightning Bolt & Yellow Badge */}
          <div className="about-bottom-right-portrait" data-aos="fade-up-left" data-aos-duration="850">
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
                loading="lazy"
              />
            </div>

            {/* Circular Yellow "not just pretty, but smart" Badge with 5-pointed star */}
            <div className="soft-powerful-badge" aria-hidden="true">
              <svg viewBox="0 0 100 100" className="badge-circular-svg">
                <path
                  id="about-badge-path"
                  d="M 15.28 42.62 A 35.5 35.5 0 1 1 24.90 75.10"
                  fill="none"
                />
                <text className="badge-curved-text" fill="#0055cb">
                  <textPath href="#about-badge-path" startOffset="0%">
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
      </div>
    </section>
  );
};

export default About;
