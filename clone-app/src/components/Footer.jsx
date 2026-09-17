import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
       {/* Testimonial Slider Area */}
       <div className="testimonial-area">
          {/* Blurred background image layer */}
          <div className="testimonial-bg" style={{backgroundImage: 'url(/designer_portrait.png)'}}></div>
          
          <div className="testimonial-content">
             <button className="slider-arrow">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1b4aba" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="19" y1="12" x2="5" y2="12"></line>
                 <polyline points="12 19 5 12 12 5"></polyline>
               </svg>
             </button>
             
             <div className="testimonial-card">
               <h3>- Social Media Content Design</h3>
               <p>
                 "Maeva did a fantastic job designing social media content for our wellness brand launch. 
                 She took the brand guidelines and ran with them, producing Instagram posts with a clean, 
                 polished aesthetic that felt cohesive and on-brand from the very first draft. 
                 Revisions were minimal, communication was smooth, and everything was delivered on time. 
                 Exactly what you want from a freelancer. Will definitely be working with her again."
               </p>
             </div>
             
             <button className="slider-arrow">
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
