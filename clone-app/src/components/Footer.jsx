import React, { useState } from 'react';
import './Footer.css';

const TESTIMONIALS = [
  {
    id: 1,
    service: '- Social Media Content Design',
    quote:
      '"Maeva did a fantastic job designing social media content for our wellness brand launch. She took the brand guidelines and ran with them, producing Instagram posts with a clean, polished aesthetic that felt cohesive and on-brand from the very first draft. Revisions were minimal, communication was smooth, and everything was delivered on time. Exactly what you want from a freelancer. Will definitely be working with her again."'
  },
  {
    id: 2,
    service: '- Brand Identity & Packaging',
    quote:
      '"Working with Maëva on our botanical skincare line was an absolute dream. She understood our vision immediately and created a visual universe that exceeded all expectations. Her attention to detail, typography, and tactile packaging dielines made our launch an incredible success."'
  },
  {
    id: 3,
    service: '- Full Rebrand & Digital Experience',
    quote:
      '"From brand strategy to the final digital and print assets, Maëva’s process was effortless and inspiring. She brought fresh ideas, incredible aesthetic intuition, and structured clarity to our brand. Our community fell in love with the new look instantly."'
  }
];

const Footer = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const currentTestimonial = TESTIMONIALS[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <footer className="footer-section">
      {/* Testimonial Slider Area */}
      <div className="testimonial-area">
        {/* Blurred background image layer */}
        <div className="testimonial-bg" style={{ backgroundImage: 'url(/designer_portrait.png)' }}></div>
        
        <div className="testimonial-content">
          <button
            type="button"
            className="slider-arrow slider-arrow-left"
            onClick={handlePrev}
            aria-label="Previous review"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b4aba" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          
          <div className="testimonial-card-wrapper">
            <div className="testimonial-card" key={currentTestimonial.id}>
              <h3>{currentTestimonial.service}</h3>
              <p>{currentTestimonial.quote}</p>
            </div>

            {/* Slider Dots */}
            <div className="testimonial-dots">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  className={`testimonial-dot ${idx === currentIdx ? 'active' : ''}`}
                  onClick={() => setCurrentIdx(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          <button
            type="button"
            className="slider-arrow slider-arrow-right"
            onClick={handleNext}
            aria-label="Next review"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b4aba" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Footer Base */}
      <div className="footer-base">
        <div className="footer-nav">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#work">WORKS</a>
          <a href="#services">SERVICES</a>
          <a href="#work-with-me">WORK WITH ME</a>
        </div>

        <div className="footer-bottom grid-bg">
          <div className="footer-bottom-content">
            <div className="footer-logo-massive">
              <img src="/assets/1.svg" alt="Vidhi Studio" className="footer-logo-img" />
            </div>
            <div className="footer-info">
              <div className="social-icons">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-circle" aria-label="LinkedIn">IN</a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="icon-circle" aria-label="Pinterest">PI</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-circle" aria-label="Instagram">IG</a>
              </div>
              <p>DESIGNED WITH LOVE BY<br/>VIDHI STUDIO</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
