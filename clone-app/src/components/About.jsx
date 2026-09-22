import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-wrapper-outer">


      {/* Main Yellow About Section matching user reference Image 2 */}
      <div className="about-main-section">
        <div className="about-content-container">

          {/* Left Column: Overlapping Studio Photos & Disco Ball Doodle */}
          <div className="about-photos-column" data-aos="fade-right" data-aos-duration="900">
            <div className="about-photo-composition">

              {/* Back Photo: Vidhi in black t-shirt working on laptop */}
              <div className="photo-card card-back">
                <img
                  src="/assets/vidhi_black_tee.png"
                  alt="Vidhi working on laptop"
                  className="photo-img"
                  loading="lazy"
                />
              </div>

              {/* Front Photo: Vidhi in black vest holding laptop smiling */}
              <div className="photo-card card-front">
                <img
                  src="/assets/vidhi_black_vest.png"
                  alt="Vidhi brand designer"
                  className="photo-img"
                  loading="lazy"
                />
              </div>

              {/* Hanging Blue Line-Art Disco Ball & Sparkles matching reference */}
              <div className="disco-ball-graphic" aria-hidden="true">
                {/* Hanging String */}
                <div className="disco-string"></div>

                {/* Disco Ball SVG */}
                <svg
                  className="disco-ball-svg"
                  width="86"
                  height="86"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer circle */}
                  <circle cx="50" cy="50" r="42" stroke="#0055cb" strokeWidth="3" fill="#ffffff" fillOpacity="0.1" />

                  {/* Horizontal grid curved lines */}
                  <ellipse cx="50" cy="50" rx="42" ry="14" stroke="#0055cb" strokeWidth="2.2" fill="none" />
                  <ellipse cx="50" cy="50" rx="42" ry="28" stroke="#0055cb" strokeWidth="2.2" fill="none" />
                  <line x1="8" y1="50" x2="92" y2="50" stroke="#0055cb" strokeWidth="2.4" />

                  {/* Vertical grid curved lines */}
                  <ellipse cx="50" cy="50" rx="14" ry="42" stroke="#0055cb" strokeWidth="2.2" fill="none" />
                  <ellipse cx="50" cy="50" rx="28" ry="42" stroke="#0055cb" strokeWidth="2.2" fill="none" />
                  <line x1="50" y1="8" x2="50" y2="92" stroke="#0055cb" strokeWidth="2.4" />

                  {/* Top hanger ring */}
                  <circle cx="50" cy="5" r="3" stroke="#0055cb" strokeWidth="2" fill="none" />
                </svg>

                {/* Top-Right Blue Sparkle Star */}
                <svg
                  className="sparkle-star sparkle-top-right"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#0055cb"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0 Q12 12 24 12 Q12 12 12 24 Q12 12 0 12 Q12 12 12 0 Z" />
                </svg>

                {/* Bottom-Left Blue Sparkle Star */}
                <svg
                  className="sparkle-star sparkle-bottom-left"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#0055cb"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0 Q12 12 24 12 Q12 12 12 24 Q12 12 0 12 Q12 12 12 0 Z" />
                </svg>
              </div>

            </div>
          </div>

          {/* Right Column: Typography & Bio matching reference Image 2 */}
          <div className="about-bio-column" data-aos="fade-left" data-aos-duration="900" data-aos-delay="150">

            <div className="about-heading-row">
              <h2 className="about-main-headline">
                hi, I’m Vidhi —<br />
                your design <span className="bestie-serif">
                  bestie
                  <svg
                    className="bestie-wavy-underline"
                    width="120"
                    height="14"
                    viewBox="0 0 120 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 7 C 14 1, 24 13, 36 7 C 48 1, 58 13, 70 7 C 82 1, 92 13, 104 7 C 110 3, 115 10, 118 7"
                      stroke="#0055cb"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            <div className="about-paragraphs-area">
              <p className="about-p">
                I help turn your ideas into designs that feel like you.
              </p>
              <p className="about-p">
                I work with creators, entrepreneurs, and growing brands who want more than just something that looks good — they want design that feels intentional, memorable, and true to their vision.
              </p>
              <p className="about-p">
                From UI/UX and web design to graphics, branding, and video, I bring ideas together into visuals that feel cohesive, polished, and full of personality.
              </p>
            </div>

            <div className="about-cta-row">
              <a href="#contact" className="work-together-btn">
                LET'S WORK TOGETHER
              </a>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
