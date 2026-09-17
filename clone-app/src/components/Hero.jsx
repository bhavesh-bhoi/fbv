import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero split-section">
      <div className="split-half hero-left">
        <div className="hero-left-content" data-aos="fade-right" data-aos-duration="900">
          <h1 className="hero-title">
            we build brands<br />
            with essence<br />
            that stand out
          </h1>
          <p className="hero-subtitle">
            5+ years turning ideas into brands with personality,<br />
            intention and a lot of character
          </p>
          <a href="#work" className="btn-pill btn-transparent">SEE WORKS</a>
        </div>
      </div>
      <div className="split-half hero-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
        {/* We use the placeholder designer portrait generated earlier */}
        <div className="hero-image-wrapper">
           <img src="/designer_portrait.png" alt="Designer Portrait" className="hero-img" />
           {/* SVG for lightning bolt would go here. We'll simulate it with an img or absolute div later if needed, but for now just the photo */}
           <div className="lightning-bolt">
             <svg width="40" height="80" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 26H12L10 46L22 20H12L12 2Z" stroke="#1b4aba" strokeWidth="2" strokeLinejoin="round"/>
             </svg>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
