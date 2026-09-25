import React, { useEffect } from 'react';
import './BareEarthPage.css';

const BareEarthPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Bared Earth | Vidhi Creative Studio';
    return () => {
      document.title = 'Portfolio';
    };
  }, []);

  return (
    <div className="page-bare-earth">
      {/* 1. Project Overview Canvas */}
      <section className="be-hero-section" data-aos="fade-up">
        <div className="be-container">
          <div className="be-hero-grid">
            
            {/* Left: Product Thumbnail */}
            <div className="be-thumb-wrapper" data-aos="zoom-in" data-aos-delay="100">
              <img
                src="/assets/bared-earth/hero-thumb.png"
                alt="Bare Earth Products"
                className="be-thumb-img"
              />
            </div>

            {/* Right: Brand Story Description & Pills */}
            <div className="be-story-wrapper" data-aos="fade-left" data-aos-delay="150">
              <div className="be-story-text">
                <p>
                  Bare Earth is a natural body care brand rooted in simplicity and connection to the earth. Inspired by forest ingredients such as pine oils and mineral clays, the visual direction was developed to reflect honesty, purity and a grounded sensory experience.
                </p>
                <p>
                  The identity balances modern minimalism with organic warmth to position the brand as quietly premium and consciously formulated. Designed to feel calm, tactile and quietly premium.
                </p>
              </div>

              {/* Tag Pills */}
              <div className="be-pills-row">
                <span className="be-pill">Brand Identity</span>
                <span className="be-pill">Packaging</span>
                <span className="be-pill">Art Direction</span>
              </div>
            </div>

          </div>

          {/* Dividing Line */}
          <div className="be-divider-line"></div>
        </div>
      </section>

      {/* 2. Project Showcase Gallery */}
      <section className="be-gallery-section">
        <div className="be-container">
          <div className="be-gallery-stack">

            {/* Image 1: Wide Banner of bottles and tubes */}
            <div className="be-gallery-item be-item-wide" data-aos="fade-up">
              <img
                src="/assets/bared-earth/showcase-1.png"
                alt="Bare Earth Body Cleanser Collection"
                className="be-gallery-img"
                loading="lazy"
              />
            </div>

            {/* Images 2 & 3: Two-Column Row */}
            <div className="be-gallery-row-split" data-aos="fade-up">
              <div className="be-split-left">
                <img
                  src="/assets/bared-earth/showcase-2.png"
                  alt="Bare Earth Product Close Up"
                  className="be-gallery-img"
                  loading="lazy"
                />
              </div>
              <div className="be-split-right">
                <img
                  src="/assets/bared-earth/showcase-3.png"
                  alt="Bare Earth Mineral Clay Ceramic Jar"
                  className="be-gallery-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Image 4: Full-width Branding & Stationery Layout */}
            <div className="be-gallery-item be-item-wide" data-aos="fade-up">
              <img
                src="/assets/bared-earth/showcase-4.png"
                alt="Bare Earth Visual Identity and Packaging Collateral"
                className="be-gallery-img"
                loading="lazy"
              />
            </div>

            {/* Image 5: Full-width Atmospheric Pine Forest Lifestyle */}
            <div className="be-gallery-item be-item-wide" data-aos="fade-up">
              <img
                src="/assets/bared-earth/showcase-5.jpg"
                alt="Bare Earth Inspired by Forest Botanicals"
                className="be-gallery-img"
                loading="lazy"
              />
            </div>

            {/* Image 6: Full-width Packaging Box & Bottles Collection */}
            <div className="be-gallery-item be-item-wide" data-aos="fade-up">
              <img
                src="/assets/bared-earth/showcase-6.jpg"
                alt="Bare Earth Packaging & Product Range"
                className="be-gallery-img"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. Back to Projects Navigation */}
      <section className="be-back-section" data-aos="fade-up">
        <div className="be-container">
          <a href="#work" className="be-back-btn">
            <svg
              className="be-back-arrow"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>BACK TO PROJECTS</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default BareEarthPage;
