import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import About from '../components/About';
import DiscoverWorks from '../components/DiscoverWorks';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <DiscoverWorks />
      <CTA />
    </div>
  );
};

export default Home;
