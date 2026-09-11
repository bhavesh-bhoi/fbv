import React from 'react';
import './Logos.css';

const Logos = () => {
  return (
    <section className="logos-section">
      <div className="logos-container">
        <div className="logos-title-area">
          <h2>
            discover<br/>the logos
          </h2>
          <svg className="wavy-underline" width="100%" height="20" preserveAspectRatio="none">
             <path d="M0,10 Q10,0 20,10 T40,10 T60,10 T80,10 T100,10 T120,10" fill="none" stroke="#1b4aba" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="logos-track">
           {/* Placeholders for logos */}
           <div className="logo-item"><h3>the<br/>poster<br/>club.</h3></div>
           <div className="logo-item"><h3>Clarity<br/><span style={{fontSize:'0.4em'}}>BY NIKKI NOVO</span></h3></div>
           <div className="logo-item"><h3>BARE<br/>EARTH</h3></div>
           <div className="logo-item"><h3>SHARED<br/>GROUND</h3></div>
           <div className="logo-item"><h3>si<br/>her</h3></div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
