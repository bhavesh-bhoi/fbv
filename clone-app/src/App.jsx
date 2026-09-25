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
import BareEarthPage from './pages/BareEarthPage';

import './index.css';

function App() {
  const getRoute = () => {
    const hash = (window.location.hash || '').toLowerCase();
    const path = (window.location.pathname || '').toLowerCase();

    if (
      hash === '#bared-earth' ||
      hash === '#bare-earth' ||
      path === '/bared-earth' ||
      path === '/bare-earth'
    ) {
      return 'bare-earth';
    }
    if (hash === '#work' || path === '/portfolio' || path === '/work') {
      return 'work';
    }
    if (hash === '#about' || hash === '#about-me' || path === '/about' || path === '/about-me') {
      return 'about';
    }
    if (hash === '#services' || path === '/services') {
      return 'services';
    }
    if (hash === '#work-with-me' || hash === '#contact' || path === '/work-with-me' || path === '/contact') {
      return 'contact';
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getRoute());

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

    const onRouteChange = () => {
      setCurrentRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'instant' });
      lenis.scrollTo(0, { immediate: true });
      AOS.refresh();
    };

    window.addEventListener('hashchange', onRouteChange);
    window.addEventListener('popstate', onRouteChange);

    return () => {
      window.removeEventListener('hashchange', onRouteChange);
      window.removeEventListener('popstate', onRouteChange);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const renderPage = () => {
    switch (currentRoute) {
      case 'bare-earth':
        return <BareEarthPage />;
      case 'work':
        return <Work />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      case 'home':
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

