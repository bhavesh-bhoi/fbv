import React, { useEffect } from 'react';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Logos from '../components/Logos';
import CTA from '../components/CTA';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page-services" style={{ paddingTop: '86px' }}>
      {/* Services Hero Header */}
      <section className="services-page-header" style={{
        padding: '5rem 2rem 3rem 2rem',
        backgroundColor: 'var(--off-white, #faf9f6)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(0, 85, 203, 0.15)'
      }} data-aos="fade-down">
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 800,
            letterSpacing: '0.2em',
            color: 'var(--blue, #0055cb)',
            backgroundColor: 'var(--light-blue, #c9d8f7)',
            padding: '6px 18px',
            borderRadius: '30px',
            marginBottom: '1.25rem'
          }}>
            OFFERINGS & PACKAGES
          </span>
          <h1 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '3.6rem',
            fontWeight: 800,
            lineHeight: 1.05,
            color: '#131313',
            letterSpacing: '-0.04em',
            margin: '0 0 1rem 0',
            textTransform: 'lowercase'
          }}>
            thoughtful branding<br />
            built to stand out
          </h1>
          <p style={{
            fontFamily: 'Instrument Serif, Georgia, serif',
            fontStyle: 'italic',
            fontSize: '1.85rem',
            lineHeight: 1.35,
            color: 'var(--blue, #0055cb)',
            margin: 0
          }}>
            From foundational visual identities to complete packaging ecosystems and bespoke digital experiences.
          </p>
        </div>
      </section>

      {/* Interactive Services Accordion & Ribbons */}
      <Services />

      {/* Shared Bottom Sequence requested by user */}
      <Portfolio />
      <Logos />
      <CTA />
    </div>
  );
};

export default ServicesPage;

