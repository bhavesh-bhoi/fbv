import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

const SERVICES_DATA = [
  {
    id: 'website-designing',
    name: 'website designing',
    subtitle: "Clean, modern websites designed to make your brand look credible and your users' journey feel effortless.",
    deliverables: [
      'Website structure & sitemap',
      'Custom website UI in Figma',
      'Desktop + mobile responsive design',
      'User flow & basic UX',
      'Interactive prototype',
      'Development-ready files',
      '2 revision rounds included',
    ],
    timeline: '3–5 Weeks',
    investment: 'from ₹25K',
  },
  {
    id: 'branding',
    name: 'branding',
    subtitle: 'A distinctive visual identity that makes your brand recognizable, consistent, and memorable.',
    deliverables: [
      'Brand discovery & creative direction',
      '2–3 logo concepts',
      'Primary & secondary logo variations',
      'Color palette & typography selection',
      'Supporting visual elements',
      'Mini brand guidelines',
      '2 revision rounds included',
    ],
    timeline: '2–4 Weeks',
    investment: 'from ₹15K',
  },
  {
    id: 'social-media-designing',
    name: 'social media designing',
    subtitle: 'Consistent, scroll-stopping visuals that give your brand a strong and recognizable online presence.',
    deliverables: [
      'Instagram post designs (10–12 designs)',
      'Carousel templates',
      'Story designs & reel covers',
      'Highlight covers & stickers',
      'Visual aesthetic direction',
      'Canva & Figma editable templates',
      '2 revision rounds included',
    ],
    timeline: '1–2 Weeks',
    investment: 'from ₹5K',
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX design',
    subtitle: 'Thoughtful digital experiences that balance usability, functionality, and visual design.',
    deliverables: [
      'User flows & low-fidelity wireframes',
      'High-fidelity UI screens',
      'Desktop & mobile responsive layouts',
      'Interactive Figma prototype',
      'Basic design system & components',
      'Developer handoff files',
      '2 revision rounds included',
    ],
    timeline: '2–4 Weeks',
    investment: 'from ₹20K',
  },
  {
    id: 'video-editing',
    name: 'video editing',
    subtitle: 'Short-form edits that turn raw footage into polished, engaging content.',
    deliverables: [
      'Instagram Reels & YouTube Shorts',
      'Clean cuts & transitions',
      'Captions & text animation',
      'Music & sound syncing',
      'Basic color correction',
      'Motion effects & graphics',
      '2 revision rounds included',
    ],
    timeline: '2–5 Business Days',
    investment: 'from ₹750/video',
  },
  {
    id: 'youtube-editing',
    name: 'YouTube editing',
    subtitle: 'Long-form edits that keep your content engaging, structured, and easy to watch.',
    deliverables: [
      'YouTube long-form editing',
      'Clean cuts & pacing',
      'Strategic B-roll placement',
      'Text & animated captions',
      'Transitions & effects',
      'Music & sound design',
      'Basic color correction',
      'Thumbnail-ready frame export',
      '2 revision rounds included',
    ],
    timeline: '3–7 Business Days',
    investment: 'from ₹3K/video',
  },
];

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState('website-designing');
  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="services-section-wrapper">
      {/* Striped Quote Section matching maedesign.es */}
      <div className="striped-section">
        <div className="striped-content" data-aos="fade-up" data-aos-duration="850">
          <svg className="heart-hand" width="50" height="80" viewBox="0 0 50 80">
            <path
              d="M25 60 C 25 60, 40 40, 40 30 C 40 20, 25 30, 25 40 C 25 30, 10 20, 10 30 C 10 40, 25 60, 25 60"
              stroke="#0055cb"
              strokeWidth="2"
              fill="none"
            />
            <path d="M22 20 L28 20 M25 17 L25 23" stroke="#0055cb" strokeWidth="2" />
          </svg>
          <div className="striped-text">
            <h2>
              <span className="circled-text">
                thoughtful,
                <svg className="circle-draw" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <ellipse cx="50" cy="20" rx="45" ry="15" stroke="#0055cb" strokeWidth="2" fill="none" />
                </svg>
              </span>
              {' playful and always intentional.'}
              <br />
              {'I design with curiosity, simplicity and a little personality —'}
              <br />
              {'turning ideas into visuals that feel as good as they look.'}
            </h2>
          </div>
          <svg className="sparkle" width="30" height="40" viewBox="0 0 30 40">
            <path
              d="M15 0 Q 15 20, 30 20 Q 15 20, 15 40 Q 15 20, 0 20 Q 15 20, 15 0"
              stroke="#0055cb"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Running Marquee Ribbon 1: BOOKS OPEN */}
      <div className="ticker-ribbon ticker-blue" data-aos="fade-up" data-aos-duration="600">
        <div className="ticker-track ticker-track-rtl">
          <span className="serif">
            BOOK YOUR OCTOBER SLOTS NOW • BOOK YOUR OCTOBER SLOTS NOW • BOOK YOUR OCTOBER SLOTS NOW • BOOK YOUR OCTOBER SLOTS NOW • BOOK YOUR OCTOBER SLOTS NOW •
          </span>
          <span className="serif" aria-hidden="true">
            BOOK YOUR OCTOBER SLOTS NOW • BOOK YOUR OCTOBER SLOTS NOW • BOOK YOUR OCTOBER SLOTS NOW • BOOK YOUR OCTOBER SLOTS NOW • BOOK YOUR OCTOBER SLOTS NOW •
          </span>
        </div>
      </div>

      {/* Split Services Section matching Image 1 reference */}
      <div className="services-split-section">
        {/* Center Top Divider Sticker (Image 1) */}
        <div className="services-divider-sticker-wrap" aria-hidden="true">
          <img
            src="/assets/2.svg"
            alt="Built from your essence - Vidhi Creative Design Studio"
            className="services-divider-sticker"
          />
        </div>

        {/* Left Half: Grid Pattern, Header, Finger Heart, & Accordion */}
        <div className="services-split-left">
          <div className="services-left-inner" data-aos="fade-right" data-aos-duration="850">

            <div className="services-header-row">
              <h2 className="services-title">
                where <span className="serif services-accent-underline">creativity</span>
                <br />
                meets your needs
              </h2>
            </div>

            <ul className="accordion">
              {SERVICES_DATA.map((service) => {
                const isActive = service.id === activeServiceId;
                return (
                  <li
                    key={service.id}
                    className={`accordion-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveServiceId(service.id)}
                  >
                    <h3 className={!isActive ? 'serif' : ''}>{service.name}</h3>
                    <span className="icon">{isActive ? '→' : '+'}</span>
                  </li>
                );
              })}
            </ul>

            <a href="#contact" className="btn-pill btn-yellow services-book-btn">
              BOOK IT!
            </a>

          </div>
        </div>

        {/* Right Half: Studio Photo Background & Floating Service Card */}
        <div className="services-split-right">
          <div className="services-photo-bg-wrap" aria-hidden="true">
            <img
              src="/assets/about_studio_texture.jpg"
              alt="Studio background"
              className="services-photo-bg"
            />
          </div>

          <div className="services-card-wrap" data-aos="fade-left" data-aos-duration="850">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="service-card"
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              >
                {/* Double Sparkle Stars Icon matching Image 1 */}
                <div className="card-icon">
                  <svg width="34" height="40" viewBox="0 0 34 40" fill="none" stroke="#0055cb" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 2 C15 10, 19 14, 27 14 C19 14, 15 18, 15 26 C15 18, 11 14, 3 14 C11 14, 15 10, 15 2 Z" />
                    <path d="M24 24 C24 28, 26 30, 30 30 C26 30, 24 32, 24 36 C24 32, 22 30, 18 30 C22 30, 24 28, 24 24 Z" />
                  </svg>
                </div>

                <h3 className="card-title">{activeService.name}</h3>
                <p className="card-subtitle">{activeService.subtitle}</p>

                <div className="card-details">
                  <h4>What's included:</h4>
                  <ul>
                    {activeService.deliverables.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="pill-info">
                    <span className="label">Timeline:</span>
                    <span className="val">{activeService.timeline}</span>
                  </div>
                  {activeService.investment && (
                    <div className="pill-info dark">
                      <span className="label">Investment:</span>
                      <span className="val">{activeService.investment}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Running Marquee Ribbon 2: Services Ticker */}
      <div className="ticker-ribbon ticker-light">
        <div className="ticker-track ticker-reverse">
          <span>
            WEBSITE DESIGN • BRANDING • SOCIAL MEDIA • UI/UX DESIGN • VIDEO EDITING • YOUTUBE EDITING • WEBSITE DESIGN • BRANDING • SOCIAL MEDIA • UI/UX DESIGN • VIDEO EDITING • YOUTUBE EDITING •
          </span>
          <span>
            WEBSITE DESIGN • BRANDING • SOCIAL MEDIA • UI/UX DESIGN • VIDEO EDITING • YOUTUBE EDITING • WEBSITE DESIGN • BRANDING • SOCIAL MEDIA • UI/UX DESIGN • VIDEO EDITING • YOUTUBE EDITING •
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
