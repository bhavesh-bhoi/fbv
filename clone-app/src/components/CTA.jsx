import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section striped-bg">
      <div className="cta-container" data-aos="zoom-in" data-aos-duration="900">
        <div className="cta-image-wrapper">
          <img src="/assets/maeva_white_tee.jpg" alt="Maëva Boukhetache" />
        </div>
        <div className="cta-text">
          <h2>
            ready to build<br/>
            something that <span className="serif serif-underline" style={{color: '#0055cb', textDecorationColor: '#0055cb'}}>feels</span><br/>
            like you?
          </h2>
          <p>let's turn your ideas into a brand you're<br/>excited to show up with</p>
          <a
            href="#contact"
            className="btn-pill"
            style={{
              backgroundColor: '#0055cb',
              color: '#fff',
              borderColor: '#0055cb',
              textDecoration: 'none',
              display: 'inline-block',
              marginTop: '1rem'
            }}
          >
            START YOUR PROJECT
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
