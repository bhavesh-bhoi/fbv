import React, { useEffect } from 'react';
import CTA from '../components/CTA';
import './Work.css';

const CASE_STUDIES = [
  {
    id: 'bare-earth',
    title: 'Bare Earth',
    description: 'Natural body care brand rooted in simplicity and connection to the earth.',
    tag: 'BODY CARE & CERAMICS',
    image: '/assets/proj_bare_earth.png',
    link: '#bared-earth'
  },
  {
    id: 'inner-matter',
    title: 'Inner Matter',
    description: 'Premium spa inspired by the idea of ritual, calm, and intentional self-care.',
    tag: 'WELLNESS & SPA',
    image: '/assets/proj_inner_matter.png',
    link: '#work'
  },
  {
    id: 'mosi-skin',
    title: 'Mosi Skin',
    description: 'Solutions-based skin studio based on Lagos, Nigeria.',
    tag: 'SKINCARE STUDIO',
    image: '/assets/proj_mosi.png',
    link: '#work'
  },
  {
    id: 'pretty-baby-things',
    title: 'Pretty Baby Things',
    description: 'Clothing and accessories brand for babies and children, created with a delicate, playful, and heartwarming aesthetic.',
    tag: 'CHILDREN & NURSERY',
    image: '/assets/proj_pretty_baby.png',
    link: '#work'
  },
  {
    id: 'shared-ground',
    title: 'Shared Ground',
    description: 'Community-driven project created to bring people together through shared walks around the city.',
    tag: 'COMMUNITY PROJECT',
    image: '/assets/proj_shared_ground.png',
    link: '#work'
  },
  {
    id: 'nomad',
    title: 'Nomad',
    description: 'Inspired by African and Arab herbal medicine, offering organic, natural, and handmade products.',
    tag: 'HERBAL MEDICINE',
    image: '/assets/proj_nomad.jpg',
    link: '#work'
  },
  {
    id: 'mallow-cbd',
    title: 'Mallow CBD',
    description: 'Wellness brand focused on high-quality CBD products designed for everyday balance.',
    tag: 'CBD & BOTANICALS',
    image: '/assets/proj_mallow.jpg',
    link: '#work'
  },
  {
    id: 'nailo',
    title: 'Nailo',
    description: 'Semi-permanent nail sticker brand created for those who want beautiful nails without the time-consuming routine.',
    tag: 'BEAUTY CARE',
    image: '/assets/work_nailo.png',
    link: '#work'
  },
  {
    id: 'poco-a-poco',
    title: 'Poco a Poco',
    description: 'Venezuelan fast food truck brand built around one idea: fast doesn’t have to mean rushed.',
    tag: 'FOOD TRUCK & PACKAGING',
    image: '/assets/proj_poco_poco.png',
    link: '#work'
  },
  {
    id: 'amora-weddings',
    title: 'Amora Weddings',
    description: 'Is a wedding planning brand created for couples who want a beautifully organized celebration without the stress of doing it alone.',
    tag: 'LUXURY WEDDINGS',
    image: '/assets/proj_amora.png',
    link: '#work'
  },
  {
    id: 'stolen-summer',
    title: 'Stolen Summer',
    description: 'A swimwear branding concept inspired by stillness, light, and organic forms.',
    tag: 'SWIMWEAR BRAND',
    image: '/assets/proj_stolen_summer.png',
    link: '#work'
  }
];

const Work = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="page-work">
      
      {/* 1. Striped Lining Portfolio Header matching Screenshot 3 & maedesign.es */}
      <section className="work-header-section" data-aos="fade-down">
        <div className="work-header-container">
          
          {/* Left: Yellow circular "not just pretty, but smart" sticker badge */}
          <div className="work-sticker-round-yellow" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="round-badge-svg">
              <path
                id="work-badge-path"
                d="M 15.28 42.62 A 35.5 35.5 0 1 1 24.90 75.10"
                fill="none"
              />
              <text className="round-badge-text" fill="#0055cb">
                <textPath href="#work-badge-path" startOffset="0%">
                  not just pretty, but smart •
                </textPath>
              </text>
              <polygon
                points="50.00,38.00 53.00,45.80 61.20,46.30 55.00,51.60 57.00,59.50 50.00,55.00 43.00,59.50 45.00,51.60 38.80,46.30 47.00,45.80"
                fill="#0055cb"
              />
            </svg>
          </div>

          {/* Center Titles */}
          <h1 className="work-main-title">
            selected branding &amp; packaging projects ✨
          </h1>
          <p className="work-main-subtitle">
            thoughtful brands created with intention, personality and a clear vision — designed to feel right and stand out naturally
          </p>

          {/* Right: Oval tilted blue sticker badge */}
          <div className="work-sticker-oval-blue" aria-hidden="true">
            <div className="oval-badge-inner">
              <span className="oval-badge-top">built from your essence</span>
              <span className="oval-badge-logo">maë</span>
              <span className="oval-badge-sub">creative design studio</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Full Project Grid with balanced spacing */}
      <section className="work-grid-section" data-aos="fade-up">
        <div className="work-projects-grid">
          {CASE_STUDIES.map((project) => (
            <a
              key={project.id}
              href={project.link || '#work'}
              className="project-grid-card"
            >
              {/* Image thumbnail with rounded corners matching screenshot */}
              <div className="card-media-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-media-img"
                  loading="lazy"
                />
              </div>

              {/* Card info row matching reference screenshot */}
              <div className="card-details-area">
                <div className="card-title-row">
                  <h3 className="card-title">{project.title}</h3>
                  <div className="card-arrow-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0055cb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="12" x2="20" y2="12"></line>
                      <polyline points="13 5 20 12 13 19"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Full-width blue divider line */}
                <div className="card-divider-line"></div>

                {/* Description text */}
                <p className="card-description">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Final CTA matching reference */}
      <CTA />
    </div>
  );
};

export default Work;
