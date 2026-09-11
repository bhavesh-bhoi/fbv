import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services">
      {/* Striped Section */}
      <div className="striped-section">
        <div className="striped-content">
          <svg className="heart-hand" width="50" height="80" viewBox="0 0 50 80">
            {/* abstract hand icon placeholder */}
            <path d="M25 60 C 25 60, 40 40, 40 30 C 40 20, 25 30, 25 40 C 25 30, 10 20, 10 30 C 10 40, 25 60, 25 60" stroke="#1b4aba" strokeWidth="2" fill="none"/>
            <path d="M22 20 L28 20 M25 17 L25 23" stroke="#1b4aba" strokeWidth="2"/>
          </svg>
          <div className="striped-text">
            <h2>
              <span className="circled-text">
                strategic,
                <svg className="circle-draw" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <ellipse cx="50" cy="20" rx="45" ry="15" stroke="#1b4aba" strokeWidth="2" fill="none"/>
                </svg>
              </span>
              {" intentional and never"}
              <br />
              {"generic. every brand is built from"}
              <br />
              {"its essence — yours included"}
            </h2>
          </div>
          <svg className="sparkle" width="30" height="40" viewBox="0 0 30 40">
             <path d="M15 0 Q 15 20, 30 20 Q 15 20, 15 40 Q 15 20, 0 20 Q 15 20, 15 0" stroke="#1b4aba" strokeWidth="2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Grid Services Section */}
      <div className="services-grid-section">
         <div className="services-container">
            
            <div className="services-left">
              <h2>where <span className="serif" style={{textDecoration: 'underline'}}>creativity</span><br/>meets your needs</h2>
              
              <ul className="accordion">
                <li className="accordion-item active">
                  <h3>starter brand</h3>
                  <span className="icon">→</span>
                </li>
                <li className="accordion-item">
                  <h3 className="serif">signature brand</h3>
                  <span className="icon">+</span>
                </li>
                <li className="accordion-item">
                  <h3 className="serif">full brand experience</h3>
                  <span className="icon">+</span>
                </li>
                <li className="accordion-item">
                  <h3 className="serif">packaging</h3>
                  <span className="icon">+</span>
                </li>
                <li className="accordion-item">
                  <h3 className="serif">social media</h3>
                  <span className="icon">+</span>
                </li>
              </ul>
              
              <button className="btn-pill btn-yellow" style={{marginTop: '3rem'}}>BOOK IT!</button>
            </div>

            <div className="services-right">
              <div className="service-card">
                 <div className="card-icon">
                    <svg width="24" height="40" viewBox="0 0 24 40">
                       <path d="M12 2L2 20H12L10 38L22 16H12L12 2Z" stroke="#1b4aba" strokeWidth="2" fill="none"/>
                    </svg>
                 </div>
                 <h3 className="card-title">starter brand</h3>
                 <p className="card-subtitle">For brands ready to build something<br/>aligned, strategic and fully their own.</p>
                 
                 <div className="card-details">
                    <h4>What's included:</h4>
                    <ul>
                      <li>2 creative directions</li>
                      <li>Primary, secondary & logo variations</li>
                      <li>Color palette</li>
                      <li>Typography selection</li>
                      <li>Photographic direction</li>
                      <li>Brand board</li>
                      <li>2 Revision rounds</li>
                    </ul>
                 </div>

                 <div className="card-footer">
                    <div className="pill-info">
                      <span className="label">Timeline:</span>
                      <span className="val">1 Week</span>
                    </div>
                    <div className="pill-info dark">
                      <span className="label">Investment:</span>
                      <span className="val">750€</span>
                    </div>
                 </div>
              </div>
            </div>

         </div>
      </div>
    </section>
  );
};

export default Services;
