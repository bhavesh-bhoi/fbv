import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo"><a href="#home">maë</a></div>
      </div>
      <div className="navbar-center">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT ME</a>
        <a href="#services">SERVICES</a>
      </div>
      <div className="navbar-right">
        <a href="#contact" className="btn-pill btn-yellow">WORK WITH ME</a>
      </div>
    </nav>
  );
};

export default Navbar;
