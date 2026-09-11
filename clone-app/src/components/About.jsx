import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      
      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content">
          <span>illustration • web design • branding • packaging • social media • graphic design • </span>
          <span>illustration • web design • branding • packaging • social media • graphic design • </span>
          <span>illustration • web design • branding • packaging • social media • graphic design • </span>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-container">
          
          <div className="about-left">
            <div className="about-image-stack">
              <img src="/designer_portrait.png" alt="Maëva 1" className="img-back" />
              <img src="/designer_portrait.png" alt="Maëva 2" className="img-front" />
              
              <svg className="disco-ball" viewBox="0 0 100 100">
                 {/* Placeholder drawn disco ball */}
                 <circle cx="50" cy="50" r="40" stroke="#1b4aba" strokeWidth="2" fill="none"/>
                 <path d="M50 10 Q 70 50, 50 90 M50 10 Q 30 50, 50 90 M10 50 Q 50 70, 90 50 M10 50 Q 50 30, 90 50" stroke="#1b4aba" strokeWidth="1" fill="none"/>
                 <path d="M20 20 L25 15 M80 20 L75 15 M80 80 L75 85" stroke="#1b4aba" strokeWidth="2"/>
              </svg>
            </div>
          </div>

          <div className="about-right">
            <h2>
              hi, I’m Maëva —<br/>
              your branding <span className="serif serif-underline">bestie</span>
            </h2>
            <p>I help you turn your ideas into a brand that actually feels like you.</p>
            <p>I work with entrepreneurs and personal brands who want more than just “pretty design” — they want something intentional, cohesive and full of personality.</p>
            <p>Together, we build brands that feel aligned, look elevated, and truly stand out in a way that makes sense for you.</p>
            
            <a href="#contact" className="btn-pill btn-transparent" style={{marginTop: '2rem'}}>LET'S WORK TOGETHER</a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
