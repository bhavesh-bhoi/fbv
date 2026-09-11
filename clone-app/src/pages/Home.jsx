import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import About from '../components/About';
import Logos from '../components/Logos';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Logos />
      <CTA />
    </div>
  );
};

export default Home;
