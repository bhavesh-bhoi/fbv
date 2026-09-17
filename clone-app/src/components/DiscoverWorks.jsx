import React from 'react';
import './DiscoverWorks.css';

const WORKS_GALLERY = [
  {
    id: 'shared-ground',
    title: 'Shared Ground',
    subtitle: 'City Walking Project',
    image: '/assets/work_shared_ground.jpg',
    tag: 'BRANDING & PACKAGING'
  },
  {
    id: 'nomad-dunes',
    title: 'Nomad',
    subtitle: 'Herbal Medicine & Packaging',
    image: '/assets/work_nomad_dunes.jpg',
    tag: 'PACKAGING DESIGN'
  },
  {
    id: 'walking-social-club',
    title: 'Walking Social Club',
    subtitle: 'Outdoor Billboard Campaign',
    image: '/assets/work_walking_billboard.jpg',
    tag: 'OUTDOOR & EDITORIAL'
  },
  {
    id: 'social-gingham',
    title: 'Visual Identity',
    subtitle: 'Social Media Templates',
    image: '/assets/work_social_gingham.jpg',
    tag: 'DIGITAL & SOCIAL'
  },
  {
    id: 'nomad-hand',
    title: 'Nomad',
    subtitle: 'Natural Body & Essence',
    image: '/assets/work_nomad_hand.jpg',
    tag: 'CREATIVE DIRECTION'
  },
  {
    id: 'inner-matter',
    title: 'Inner Matter',
    subtitle: 'Mindfulness & Editorial',
    image: '/assets/work_inner_matter.png',
    tag: 'EDITORIAL DESIGN'
  },
  {
    id: 'bare-earth',
    title: 'Bare Earth',
    subtitle: 'Artisanal Ceramics Goods',
    image: '/assets/work_bare_earth.png',
    tag: 'ART DIRECTION'
  },
  {
    id: 'nailo',
    title: 'Nailo',
    subtitle: 'Semi-Permanent Stickers',
    image: '/assets/work_nailo.png',
    tag: 'PACKAGING'
  },
  {
    id: 'mosi-skin',
    title: 'Mosi Skin',
    subtitle: 'Clinical Skincare Studio',
    image: '/assets/work_mosi_skin.png',
    tag: 'BRAND IDENTITY'
  }
];

const DiscoverWorks = () => {
  const handleCardClick = () => {
    window.location.hash = '#work';
  };

  return (
    <section className="discover-works-section" data-aos="fade-up">
      <div className="discover-works-container">
        
        {/* Left Header Column */}
        <div className="discover-works-left">
          <h2 className="discover-title">
            <span className="discover-line">Discover</span>
            <span className="works-line">
              my works
              {/* Hand-drawn double wavy underline SVG */}
              <svg
                className="works-wavy-underline"
                width="155"
                height="20"
                viewBox="0 0 155 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9 C 18 3, 30 17, 46 9 C 62 1, 74 17, 90 9 C 106 1, 118 17, 134 9 C 142 5, 148 11, 153 9"
                  stroke="#0055cb"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 14 C 20 8, 32 22, 48 14 C 64 6, 76 22, 92 14 C 108 6, 120 22, 136 14 C 144 10, 150 16, 154 14"
                  stroke="#0055cb"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>
            </span>
          </h2>

          <a href="#work" className="see-more-btn">
            SEE MORE
          </a>
        </div>

        {/* Right Gallery Cards Infinite Scroller */}
        <div className="discover-works-right">
          <div className="works-marquee-container">
            <div className="works-marquee-track">
              {/* First loop of cards */}
              {WORKS_GALLERY.map((work) => (
                <div
                  key={`work-1-${work.id}`}
                  className="work-gallery-card"
                  onClick={handleCardClick}
                >
                  <div className="card-thumb-wrap">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="card-thumb-img"
                      draggable="false"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
              {/* Second loop of cards for seamless infinite scroll */}
              {WORKS_GALLERY.map((work) => (
                <div
                  key={`work-2-${work.id}`}
                  className="work-gallery-card"
                  aria-hidden="true"
                  onClick={handleCardClick}
                >
                  <div className="card-thumb-wrap">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="card-thumb-img"
                      draggable="false"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DiscoverWorks;
