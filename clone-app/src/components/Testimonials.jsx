import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      '“Working with Maëva was transformative for Mosi Skin. She captured the botanical, serene essence of our brand and gave it a luxury voice that resonates deeply with our customers.”',
    author: 'SOFIA V.',
    role: 'Founder of Mosi Skin',
    tag: 'BRANDING & PACKAGING',
    highlight: 'transformative',
  },
  {
    id: 2,
    quote:
      '“From the very first direction, Maë understood Inner Matter’s vision. The packaging and visual system are breathtaking — tactile, intentional, and unlike anything else in the wellness space.”',
    author: 'CAMILLE L.',
    role: 'Creative Director, Inner Matter',
    tag: 'IDENTITY & SPA RETAIL',
    highlight: 'breathtaking',
  },
  {
    id: 3,
    quote:
      '“Maëva created something that truly feels like us. Launching Pretty Baby Things with such a cohesive, elevated identity gave us immediate credibility and customer love from day one.”',
    author: 'CHLOE B.',
    role: 'Founder, Pretty Baby Things',
    tag: 'FULL BRAND EXPERIENCE',
    highlight: 'elevated identity',
  },
];

const Testimonials = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const next = () => setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[currentIdx];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container" data-aos="fade-up" data-aos-duration="900">
        <div className="testimonials-header">
          <span className="testimonials-eyebrow">WHAT CLIENTS SAY</span>
          <h2 className="testimonials-title">
            words from <span className="serif">kind founders</span>
          </h2>
        </div>

        <div className="testimonials-card-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            >
              <div className="quote-badge">
                <span>{current.tag}</span>
              </div>
              <p className="quote-text serif">{current.quote}</p>
              <div className="quote-author-info">
                <span className="author-name">{current.author}</span>
                <span className="author-role">{current.role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="testimonials-nav-bar">
            <button type="button" className="t-nav-btn" onClick={prev} aria-label="Previous review">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="t-dots">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`t-dot ${idx === currentIdx ? 'active' : ''}`}
                  onClick={() => setCurrentIdx(idx)}
                  aria-label={`Jump to review ${idx + 1}`}
                >
                  <span className="dot-fill" />
                </button>
              ))}
            </div>

            <button type="button" className="t-nav-btn" onClick={next} aria-label="Next review">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
