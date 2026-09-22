import React, { useEffect } from 'react';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page-services">
      {/* Services Section with striped quote banner at the very top */}
      <Services />

      {/* Shared Sequence */}
      <Portfolio />
      <CTA />
    </div>
  );
};

export default ServicesPage;
