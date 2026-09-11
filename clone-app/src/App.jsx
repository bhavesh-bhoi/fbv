import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

import './index.css';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const onHashChange = () => setCurrentPath(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '#work': return <Work />;
      case '#about': return <AboutPage />;
      case '#services': return <ServicesPage />;
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
