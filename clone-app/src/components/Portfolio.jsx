import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="work" className="portfolio-section">
      
      {/* Decorative Stickers */}
      <div className="sticker-container">
        <div className="sticker-yellow">
           <svg viewBox="0 0 100 100" className="rotating-text">
             <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
             <text fill="#1b4aba" fontSize="11" fontWeight="bold">
               <textPath href="#circlePath" startOffset="0%">not just pretty, but smart •</textPath>
               <textPath href="#circlePath" startOffset="50%">not just pretty, but smart •</textPath>
             </text>
           </svg>
           <div className="sticker-yellow-center">ä</div>
        </div>

        <div className="sticker-blue">
           <svg viewBox="0 0 150 80" className="oval-text">
             <ellipse cx="75" cy="40" rx="65" ry="35" fill="#1b4aba" />
             <text x="75" y="35" fill="#fff" fontSize="10" textAnchor="middle" fillOpacity="0.8">built from your essence</text>
             <text x="75" y="55" fill="#fff" fontSize="20" fontWeight="bold" textAnchor="middle">maë</text>
             <text x="75" y="65" fill="#fff" fontSize="8" textAnchor="middle" fillOpacity="0.8">creative design studio</text>
           </svg>
        </div>
      </div>

      <div className="purpose-header">
        <h2>designed with</h2>
        <h2 className="serif purpose-accent">
           purpose
           <svg className="purpose-underline" viewBox="0 0 100 20" preserveAspectRatio="none">
             <path d="M5,15 Q50,5 95,15 M10,20 Q50,10 90,20" stroke="#1b4aba" fill="none" strokeWidth="1.5" />
           </svg>
        </h2>
        <svg className="purpose-arrow" width="30" height="40" viewBox="0 0 24 40" fill="none" stroke="#1b4aba" strokeWidth="2">
           <path d="M20 2 Q 5 15, 10 30" fill="none" />
           <path d="M5 25 L10 30 L15 25" fill="none" />
        </svg>
      </div>

      <div className="portfolio-masonry">
        
        {/* We use grid to place elements exactly like the screenshot */}
        <div className="masonry-text-list">
           <h3 className="active">Mosi Skin</h3>
           <h3 className="serif">PRETTY BABY THINGS</h3>
           <h3 className="serif">Inner Matter</h3>
           <h3 className="serif">SHARED GROUND</h3>
           <h3 className="serif">Bare Earth</h3>
        </div>

        <div className="masonry-image img-1">
          <img src="/portfolio_1.png" alt="Mosi Skin 1" />
        </div>
        <div className="masonry-image img-2">
          <img src="/portfolio_2.png" alt="Mosi Skin 2" />
        </div>
        <div className="masonry-image img-3">
          <img src="/portfolio_1.png" alt="Portfolio item" />
        </div>
        <div className="masonry-image img-4">
          <img src="/portfolio_2.png" alt="Portfolio item" />
        </div>
        <div className="masonry-image img-5">
          <img src="/portfolio_1.png" alt="Portfolio item" />
        </div>
      </div>

      <div className="flex-center" style={{marginTop: '4rem'}}>
        <a href="#more" className="btn-pill btn-transparent">SEE MORE</a>
      </div>

    </section>
  );
};

export default Portfolio;
