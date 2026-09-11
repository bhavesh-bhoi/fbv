import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section striped-bg">
       <div className="cta-container">
          <div className="cta-image-wrapper">
             <img src="/designer_portrait.png" alt="Designer" />
          </div>
          <div className="cta-text">
             <h2>
               ready to build<br/>
               something that <span className="serif serif-underline" style={{color: '#1b4aba', textDecorationColor: '#1b4aba'}}>feels</span><br/>
               like you?
             </h2>
             <p>let's turn your ideas into a brand you're<br/>excited to show up with</p>
             <button className="btn-pill" style={{backgroundColor: '#1b4aba', color: '#fff', borderColor: '#1b4aba'}}>START YOUR PROJECT</button>
          </div>
       </div>
    </section>
  );
};

export default CTA;
