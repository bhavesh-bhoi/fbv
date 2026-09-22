import React, { useEffect } from 'react';
import DiscoverWorks from './DiscoverWorks';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    // Load Tally embed widget to handle seamless iframe resizing without scrollbars
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="contact-component">
      
      {/* 1. Contact Hero Banner matching maedesign.es/work-with-me (new-canvas) */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          
          {/* Left Column: Got something in mind? */}
          <div className="contact-hero-left" data-aos="fade-right">
            <h1 className="contact-hero-title">
              got something in mind? ✨
            </h1>
            <p className="contact-hero-lead">
              A question, an idea… or just feeling like chatting?
            </p>
            <p className="contact-hero-subtext">
              Fill out the form and I’ll get back to you within 48 hours to see if we’re a good fit.
              From there, we can dive into the details and start bringing your brand to life.
            </p>
          </div>

          {/* Middle vertical divider line */}
          <div className="contact-hero-divider" aria-hidden="true"></div>

          {/* Right Column: Photo of Maëva */}
          <div className="contact-hero-right" data-aos="fade-left">
            <div className="contact-photo-frame">
              <img
                src="/assets/contact_maeva_portrait.jpg"
                alt="Maëva - Brand Designer"
                className="contact-portrait-img"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Official Contact Form Section (Tally embed without scrollbars) */}
      <section className="contact-form-section" id="inquiry-form" data-aos="fade-up">
        <div className="contact-form-container">
          
          {/* Corner Sticker */}
          <div className="contact-floating-sticker" aria-hidden="true">
            <span>studio essence ★</span>
          </div>

          <div className="tally-embed-wrapper">
            <iframe
              src="https://tally.so/embed/pbM00Z?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="1050"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Mae Studio Project Inquiry"
              className="tally-iframe"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3. Discover My Works Drag Scroller (works from maedesign.es/work-with-me) */}
      <DiscoverWorks />

      {/* 4. Quote Banner matching quote-2 from maedesign.es/work-with-me */}
      <section className="contact-quote-banner" data-aos="fade-up">
        <div className="contact-quote-container">
          <svg className="contact-quote-star-left" width="36" height="36" viewBox="0 0 24 24" fill="#fffcbd">
            <path d="M12 0 Q12 12 24 12 Q12 12 12 24 Q12 12 0 12 Q12 12 12 0 Z" />
          </svg>
          <h2 className="contact-quote-text">
            strategic, intentional and never generic. every brand is built from its essence — yours included
          </h2>
          <svg className="contact-quote-star-right" width="36" height="36" viewBox="0 0 24 24" fill="#fffcbd">
            <path d="M12 0 Q12 12 24 12 Q12 12 12 24 Q12 12 0 12 Q12 12 12 0 Z" />
          </svg>
        </div>
      </section>

    </div>
  );
};

export default Contact;
