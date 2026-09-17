import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

import './index.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Initialize AOS
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });

    lenis.on('scroll', () => {
      AOS.refresh();
    });

    const onHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#work': return <Work />;
      case '#about': return <AboutPage />;
      case '#services': return <ServicesPage />;
      case '#contact': return <ContactPage />;
      case '#home':
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

