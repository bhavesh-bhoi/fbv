import React, { useEffect } from 'react';
import DiscoverWorks from '../components/DiscoverWorks';
import './AboutPage.css';

const STUDIO_PILLARS = [
  {
    num: '01',
    title: '+5 years of professional experience',
    desc: 'Partnered with 50+ founders and visionaries globally to launch distinct, soulful brand identities.'
  },
  {
    num: '02',
    title: 'Tailored, unique and strategic design',
    desc: 'No cookie-cutter templates. Every system is built from the ground up to reflect your true essence.'
  },
  {
    num: '03',
    title: 'Strong aesthetic sense (beauty, fashion & lifestyle)',
    desc: 'European editorial elegance, modern tactile typography, and warm, magnetic color palettes.'
  },
  {
    num: '04',
    title: 'Clear communication & smooth collaboration',
    desc: 'Organized milestones, dedicated client portals, and transparent guidance every step of the way.'
  },
  {
    num: '05',
    title: 'Attention to detail and brand consistency',
    desc: 'From custom submarks and typography hierarchies to tactile packaging dielines and social guidelines.'
  },
  {
    num: '06',
    title: 'Versatile and adaptable to different industries',
    desc: 'Bringing intentionality and elevated personality to beauty, hospitality, ceramics, fashion, and wellness.'
  }
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page-about" style={{ paddingTop: '86px' }}>
      
      {/* 1. About Hero Section matching live https://maedesign.es/about-me */}
      <section className="about-page-hero" data-aos="fade-down">
        <div className="about-page-hero-container">
          
          {/* Left Column: Photo of Maëva & Authentic Tags */}
          <div className="about-page-hero-left">
            <div className="about-page-photo-stack">
              <img
                src="/assets/about_hero_maeva.jpg"
                alt="Maëva Boukhetache - Brand Designer"
                className="about-page-main-photo"
              />
              
              {/* Sticker Tag 1 */}
              <div className="about-page-tag-top">
                <span>Fluent in Spanish, French and English.</span>
              </div>

              {/* Sticker Tag 2 */}
              <div className="about-page-tag-bottom">
                <span>“Always adapting to each project’s personality”</span>
              </div>

              {/* Studio Seal Badge */}
              <div className="about-page-seal">
                <span>VIDHI<br />STUDIO</span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Bio */}
          <div className="about-page-hero-right">
            <span className="about-page-eyebrow">ABOUT ME • VALENCIA, SPAIN</span>
            
            <h1 className="about-page-hero-title">
              I help entrepreneurs and personal brands turn their ideas into something more — brands that feel intentional, aligned and full of personality.
            </h1>
            
            <p className="about-page-hero-p">
              Hi, I’m Maëva! A brand and packaging designer with over 5 years of professional experience crafting elevated visual universes for boutique studios, lifestyle brands, and creative entrepreneurs worldwide.
            </p>

            <p className="about-page-hero-p">
              I believe your brand should be as intentional and unforgettable as the work you do. Together, we build something that feels effortlessly aligned, elevated in every detail, and truly memorable.
            </p>

            <div className="about-page-cta-row">
              <a href="#contact" className="btn-pill btn-primary-custom">
                WORK WITH ME ✨
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Philosophy & Principles Section matching maedesign.es/about-me */}
      <section className="about-philosophy-section" data-aos="fade-up">
        <div className="about-philosophy-container">
          
          {/* Left Column: Studio Photo Texture */}
          <div className="about-philosophy-media">
            <div className="philosophy-photo-card">
              <img
                src="/assets/about_studio_texture.jpg"
                alt="Studio textures and tactile goods"
                className="philosophy-photo-img"
                loading="lazy"
              />
              <div className="philosophy-deco-pill">
                <span>EST. 2019 • STUDIO ESSENCE</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Principles Grid */}
          <div className="about-philosophy-content">
            <div className="philosophy-header">
              <span className="philosophy-eyebrow">STUDIO VALUES</span>
              <h2 className="philosophy-title">
                Strategic, intentional and never generic.
              </h2>
            </div>

            <div className="pillars-cards-list">
              {STUDIO_PILLARS.map((pillar) => (
                <div key={pillar.num} className="pillar-detail-row">
                  <span className="pillar-index">{pillar.num}</span>
                  <div className="pillar-info">
                    <h3 className="pillar-title-text">{pillar.title}</h3>
                    <p className="pillar-desc-text">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Discover My Works Section matching maedesign.es/about-me */}
      <DiscoverWorks />

    </div>
  );
};

export default AboutPage;
