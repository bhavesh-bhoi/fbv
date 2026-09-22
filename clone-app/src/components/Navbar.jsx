import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // If at the very top, always show navbar
          if (currentScrollY <= 20) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 70) {
            // Scrolling down -> hide navbar
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up -> show navbar
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${!isVisible ? 'navbar--hidden' : ''}`}>
      <div className="navbar-left">
        <div className="logo">
          <a href="#home" aria-label="Vidhi Studio Home">
            <img src="/assets/1.svg" alt="Vidhi" className="nav-logo-img" />
          </a>
        </div>
      </div>
      <div className="navbar-center">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT ME</a>
        <a href="#services">SERVICES</a>
      </div>
      <div className="navbar-right">
        <a href="#work-with-me" className="btn-pill btn-yellow">WORK WITH ME</a>
      </div>
    </nav>
  );
};

export default Navbar;
