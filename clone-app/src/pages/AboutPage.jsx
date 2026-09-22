import React, { useEffect } from 'react';
import DiscoverWorks from '../components/DiscoverWorks';
import './AboutPage.css';

const WHY_WORK_ITEMS = [
  '+5 years of professional experience',
  'Tailored, unique and strategic design',
  'Strong aesthetic sense (beauty, fashion & lifestyle)',
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
      
      {/* 1. Hero Collage Section (hero-6 from maedesign.es/about-me) */}
      <section className="about-hero-collage" data-aos="fade-down">
        <div className="about-hero-collage-container">
          
          {/* Top Left Photo: Vidhi in black vest */}
          <div className="collage-card collage-photo-1" data-aos="fade-down-right" data-aos-delay="100">
            <img
              src="/assets/vidhi_black_vest.png"
              alt="Vidhi"
              className="collage-img"
            />
          </div>

          {/* Top Right Tag & Doodles */}
          <div className="collage-tag collage-tag-top-right" data-aos="fade-down-left" data-aos-delay="150">
            <p className="serif-tag">"Always adapting to each project’s personality"</p>
            {/* Wavy underline doodle */}
            <svg className="wavy-tag-doodle" width="115" height="16" viewBox="0 0 115 16" fill="none">
              <path
                d="M2 8 C 15 2, 25 14, 38 8 C 51 2, 61 14, 74 8 C 87 2, 97 14, 112 8"
                stroke="#0055cb"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Top Far Right Photo */}
          <div className="collage-card collage-photo-2" data-aos="fade-down-left" data-aos-delay="200">
            <img
              src="/assets/vidhi_black_tee.png"
              alt="Vidhi creative work"
              className="collage-img"
            />
          </div>

          {/* Center Main Headline */}
          <div className="about-hero-center-content" data-aos="zoom-in" data-aos-delay="50">
            <h1 className="about-hero-title">
              hello! I'm Maëva, a Valencia-based brand designer with over 5 years of experience and 50+ clients.
            </h1>
            <p className="about-hero-subtitle serif">
              I help entrepreneurs and personal brands turn their ideas into something more — brands that feel intentional, aligned and full of personality.
            </p>
          </div>

          {/* Bottom Left Tag: Fluent in Spanish, French and English */}
          <div className="collage-tag collage-tag-bottom-left" data-aos="fade-up-right" data-aos-delay="200">
            <p className="serif-tag">Fluent in Spanish, French and English.</p>
          </div>

          {/* Bottom Left Photo */}
          <div className="collage-card collage-photo-3" data-aos="fade-up-right" data-aos-delay="250">
            <img
              src="/assets/about_hero_maeva.jpg"
              alt="Studio portrait"
              className="collage-img"
            />
          </div>

          {/* Bottom Right Photo */}
          <div className="collage-card collage-photo-4" data-aos="fade-up-left" data-aos-delay="250">
            <img
              src="/assets/contact_maeva_portrait.jpg"
              alt="Maëva Boukhetache"
              className="collage-img"
            />
          </div>

          {/* Playful Stickers & Doodles */}
          <div className="collage-sticker-star-1" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#0055cb">
              <path d="M12 0 Q12 12 24 12 Q12 12 12 24 Q12 12 0 12 Q12 12 12 0 Z" />
            </svg>
          </div>
          <div className="collage-sticker-star-2" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0055cb">
              <path d="M12 0 Q12 12 24 12 Q12 12 12 24 Q12 12 0 12 Q12 12 12 0 Z" />
            </svg>
          </div>
          <div className="collage-sticker-oval" aria-hidden="true">
            <span>studio essence ★</span>
          </div>

        </div>
      </section>

      {/* 2. "why work with me?" Yellow Section (new-canvas from maedesign.es/about-me) */}
      <section className="about-why-work-section" data-aos="fade-up">
        <div className="about-why-work-container">
          
          {/* Left Column: Photo & Sticker */}
          <div className="why-work-left" data-aos="fade-right" data-aos-delay="100">
            <div className="why-work-photo-frame">
              <img
                src="/assets/about_studio_texture.jpg"
                alt="Maëva creative work and materials"
                className="why-work-img"
              />
              {/* Floating tilted sticker */}
              <div className="why-work-floating-sticker">
                <span className="sticker-bold">soft but</span>
                <span className="sticker-italic serif">powerful</span>
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

      {/* 3. Discover My Works Drag Scroller (works from maedesign.es/about-me) */}
      <DiscoverWorks />

    </div>
  );
};

export default AboutPage;
