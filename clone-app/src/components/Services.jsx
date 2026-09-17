import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Services.css';

const SERVICES_DATA = [
  {
    id: 'starter-brand',
    name: 'starter brand',
    isSerif: false,
    subtitle: 'For brands ready to build something aligned, strategic and fully their own.',
    deliverables: [
      '2 creative directions',
      'Primary, secondary & logo variations',
      'Curated color palette',
      'Typography selection & hierarchy',
      'Photographic mood & art direction',
      'Complete brand style board',
      '2 revision rounds included',
    ],
    timeline: '1-2 Weeks',
    investment: '750€',
  },
  {
    id: 'signature-brand',
    name: 'signature brand',
    isSerif: true,
    subtitle: 'Comprehensive brand identity crafted for established businesses looking to elevate.',
    deliverables: [
      '3 bespoke creative directions',
      'Full logo suite & brand marks',
      'Custom color system & typography',
      'Detailed 35+ page Brand Guidelines',
      'Stationery & print collateral suite',
      'Social media launch templates',
      'Unlimited refinement rounds',
    ],
    timeline: '3-4 Weeks',
    investment: '1.350€',
  },
  {
    id: 'full-brand-experience',
    name: 'full brand experience',
    isSerif: true,
    subtitle: 'The all-inclusive visual transformation: branding, packaging, and custom website.',
    deliverables: [
      'Complete signature branding suite',
      'Custom Showit / Webflow website design',
      'Full packaging design & mockups',
      'Marketing collateral & launch kit',
      'Complete art & photo direction guide',
      '30-day post-launch support & handoff',
    ],
    timeline: '5-6 Weeks',
    investment: '2.250€',
  },
  {
    id: 'packaging',
    name: 'packaging',
    isSerif: true,
    subtitle: 'Tangible, luxurious packaging design that captivates on shelf and unboxing.',
    deliverables: [
      'Custom packaging & dieline setup',
      'Box, pouch, label, or vessel design',
      'Print-ready high-res production files',
      'Sustainable material consultation',
      'Photorealistic 3D renders & mockups',
      'Direct printer coordination support',
    ],
    timeline: '2-3 Weeks',
    investment: 'from 120€',
  },
  {
    id: 'social-media',
    name: 'social media',
    isSerif: true,
    subtitle: 'Elevated digital presence with customizable, high-conversion visual templates.',
    deliverables: [
      'Custom Instagram templates suite',
      'Story, reel cover & carousel layouts',
      'Instagram grid aesthetic direction',
      'Custom highlight covers & stickers',
      'Typography & color styling guide',
      'Canva & Figma editable files',
    ],
    timeline: '1 Week',
    investment: 'from 120€',
  },
];

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState('starter-brand');
  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="services-section-wrapper">
      {/* Striped Quote Section matching maedesign.es */}
      <div className="striped-section">
        <div className="striped-content" data-aos="fade-up" data-aos-duration="850">
          <svg className="heart-hand" width="50" height="80" viewBox="0 0 50 80">
            <path
              d="M25 60 C 25 60, 40 40, 40 30 C 40 20, 25 30, 25 40 C 25 30, 10 20, 10 30 C 10 40, 25 60, 25 60"
              stroke="#0055cb"
              strokeWidth="2"
              fill="none"
            />
            <path d="M22 20 L28 20 M25 17 L25 23" stroke="#0055cb" strokeWidth="2" />
          </svg>
          <div className="striped-text">
            <h2>
              <span className="circled-text">
                strategic,
                <svg className="circle-draw" viewBox="0 0 100 40" preserveAspectRatio="none">
                  <ellipse cx="50" cy="20" rx="45" ry="15" stroke="#0055cb" strokeWidth="2" fill="none" />
                </svg>
              </span>
              {' intentional and never'}
              <br />
              {'generic. every brand is built from'}
              <br />
              {'its essence — yours included'}
            </h2>
          </div>
          <svg className="sparkle" width="30" height="40" viewBox="0 0 30 40">
            <path
              d="M15 0 Q 15 20, 30 20 Q 15 20, 15 40 Q 15 20, 0 20 Q 15 20, 15 0"
              stroke="#0055cb"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Running Marquee Ribbon 1: BOOKS OPEN */}
      <div className="ticker-ribbon ticker-blue" data-aos="fade-up" data-aos-duration="600">
        <div className="ticker-track">
          <span className="serif">
            BOOKS OPEN • BOOK YOUR SPOT FOR Q1 • ONLY 2 SPOTS LEFT • BOOKS OPEN • BOOK YOUR SPOT FOR Q1 • ONLY 2 SPOTS LEFT • BOOKS OPEN • BOOK YOUR SPOT FOR Q1 • ONLY 2 SPOTS LEFT • BOOKS OPEN • BOOK YOUR SPOT FOR Q1 • ONLY 2 SPOTS LEFT • 
          </span>
          <span className="serif">
            BOOKS OPEN • BOOK YOUR SPOT FOR Q1 • ONLY 2 SPOTS LEFT • BOOKS OPEN • BOOK YOUR SPOT FOR Q1 • ONLY 2 SPOTS LEFT • BOOKS OPEN • BOOK YOUR SPOT FOR Q1 • ONLY 2 SPOTS LEFT • BOOKS OPEN • BOOK YOUR SPOT FOR Q1 • ONLY 2 SPOTS LEFT • 
          </span>
        </div>
      </div>

      {/* Grid Services Section */}
      <div className="services-grid-section">
        <div className="services-container" data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">
          <div className="services-left">
            <h2>
              where <span className="serif services-accent-underline">creativity</span>
              <br />
              meets your needs
            </h2>

            <ul className="accordion">
              {SERVICES_DATA.map((service) => {
                const isActive = service.id === activeServiceId;
                return (
                  <li
                    key={service.id}
                    className={`accordion-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveServiceId(service.id)}
                  >
                    <h3 className={!isActive ? 'serif' : ''}>{service.name}</h3>
                    <span className="icon">{isActive ? '→' : '+'}</span>
                  </li>
                );
              })}
            </ul>

            <a href="#contact" className="btn-pill btn-yellow" style={{ marginTop: '3rem' }}>
              BOOK IT!
            </a>
          </div>

          <div className="services-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="service-card"
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              >
                <div className="card-icon">
                  <svg width="24" height="40" viewBox="0 0 24 40">
                    <path
                      d="M12 2L2 20H12L10 38L22 16H12L12 2Z"
                      stroke="#0055cb"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="card-title">{activeService.name}</h3>
                <p className="card-subtitle">{activeService.subtitle}</p>

                <div className="card-details">
                  <h4>What's included:</h4>
                  <ul>
                    {activeService.deliverables.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer">
                  <div className="pill-info">
                    <span className="label">Timeline:</span>
                    <span className="val">{activeService.timeline}</span>
                  </div>
                  <div className="pill-info dark">
                    <span className="label">Investment:</span>
                    <span className="val">{activeService.investment}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Running Marquee Ribbon 2: Services Ticker */}
      <div className="ticker-ribbon ticker-light">
        <div className="ticker-track ticker-reverse">
          <span>
            ILLUSTRATION • WEB DESIGN • BRANDING • PACKAGING • SOCIAL MEDIA • ART DIRECTION • CREATIVE DIRECTION • 
          </span>
          <span>
            ILLUSTRATION • WEB DESIGN • BRANDING • PACKAGING • SOCIAL MEDIA • ART DIRECTION • CREATIVE DIRECTION • 
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
