import React, { useEffect } from 'react';
import CTA from '../components/CTA';
import './Work.css';

const CASE_STUDIES = [
  {
    id: 'mosi-skin',
    title: 'Mosi Skin',
    description: 'Solutions-based skin studio based on Lagos, Nigeria.',
    tag: 'SKINCARE STUDIO',
    image: '/assets/proj_mosi.png',
  },
  {
    id: 'inner-matter',
    title: 'Inner Matter',
    description: 'Premium spa inspired by the idea of ritual, calm, and intentional self-care.',
    tag: 'WELLNESS & SPA',
    image: '/assets/proj_inner_matter.png',
  },
  {
    id: 'bare-earth',
    title: 'Bare Earth',
    description: 'Natural body care brand rooted in simplicity and connection to the earth.',
    tag: 'BODY CARE & CERAMICS',
    image: '/assets/proj_bare_earth.png',
  },
  {
    id: 'pretty-baby-things',
    title: 'Pretty Baby Things',
    description: 'Clothing and accessories brand for babies and children, created with a delicate, playful, and heartwarming aesthetic.',
    tag: 'CHILDREN & NURSERY',
    image: '/assets/proj_pretty_baby.png',
  },
  {
    id: 'shared-ground',
    title: 'Shared Ground',
    description: 'Community-driven project created to bring people together through shared walks around the city.',
    tag: 'COMMUNITY PROJECT',
    image: '/assets/proj_shared_ground.png',
  },
  {
    id: 'nomad',
    title: 'Nomad',
    description: 'Inspired by African and Arab herbal medicine, offering organic, natural, and handmade products.',
    tag: 'HERBAL MEDICINE',
    image: '/assets/proj_nomad.jpg',
  },
  {
    id: 'mallow-cbd',
    title: 'Mallow CBD',
    description: 'Wellness brand focused on high-quality CBD products designed for everyday balance.',
    tag: 'CBD & BOTANICALS',
    image: '/assets/proj_mallow.jpg',
  },
  {
    id: 'nailo',
    title: 'Nailo',
    description: 'Semi-permanent nail sticker brand created for those who want beautiful nails without the time-consuming routine.',
    tag: 'BEAUTY CARE',
    image: '/assets/work_nailo.png',
  },
  {
    id: 'poco-a-poco',
    title: 'Poco a Poco',
    description: 'Venezuelan fast food truck brand built around one idea: fast doesn’t have to mean rushed.',
    tag: 'FOOD TRUCK & PACKAGING',
    image: '/assets/proj_poco_poco.png',
  },
  {
    id: 'amora-weddings',
    title: 'Amora Weddings',
    description: 'Is a wedding planning brand created for couples who want a beautifully organized celebration without the stress of doing it alone.',
    tag: 'LUXURY WEDDINGS',
    image: '/assets/proj_amora.png',
  },
  {
    id: 'stolen-summer',
    title: 'Stolen Summer',
    description: 'A swimwear branding concept inspired by stillness, light, and organic forms.',
    tag: 'SWIMWEAR BRAND',
    image: '/assets/proj_stolen_summer.png',
  }
];

const Work = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page-work" style={{ paddingTop: '86px' }}>
      
      {/* 1. Portfolio Header matching live https://maedesign.es/portfolio */}
      <section className="work-header-section" data-aos="fade-down">
        <div className="work-header-container">
          <div className="work-header-deco-left" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 50 50" fill="none">
              <path d="M25 0 Q25 25 50 25 Q25 25 25 50 Q25 25 0 25 Q25 25 25 0 Z" fill="#0055cb" />
            </svg>
          </div>

          <h1 className="work-main-title">
            selected branding &amp; packaging projects ✨
          </h1>
          <p className="work-main-subtitle">
            thoughtful brands created with intention, personality and a clear vision — designed to feel right and stand out naturally
          </p>

          <div className="work-header-deco-right" aria-hidden="true">
            <div className="work-sticker-pill">
              <span>VIDHI STUDIO</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full Project Grid matching maedesign.es/portfolio */}
      <section className="work-grid-section" data-aos="fade-up">
        <div className="work-projects-grid">
          {CASE_STUDIES.map((project) => (
            <div key={project.id} className="project-grid-card">
              {/* Image thumbnail with 10px rounded corners */}
              <div className="card-media-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-media-img"
                  loading="lazy"
                />
                <span className="card-tag-pill">{project.tag}</span>
              </div>

              {/* Card info row matching exact showit structure */}
              <div className="card-details-area">
                <div className="card-title-row">
                  <h3 className="card-title">{project.title}</h3>
                  <div className="card-arrow-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0055cb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Line divider */}
                <div className="card-divider-line"></div>

                {/* Description text */}
                <p className="card-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA matching reference */}
      <CTA />
    </div>
  );
};

export default Work;
