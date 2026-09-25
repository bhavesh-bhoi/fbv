import React, { useRef, useEffect, useState } from 'react';
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
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [isDraggingState, setIsDraggingState] = useState(false);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const singleSetWidthRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const movedDistanceRef = useRef(0);
  const rafIdRef = useRef(null);

  // Initialize track position in the middle set
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      // 3 identical loops rendered, single set width is 1/3 of total track scrollWidth
      const totalWidth = track.scrollWidth;
      const singleSetWidth = totalWidth / 3;
      singleSetWidthRef.current = singleSetWidth;

      if (currentXRef.current === 0 && singleSetWidth > 0) {
        currentXRef.current = -singleSetWidth;
        track.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
      }
    };

    // Measure once loaded
    measure();
    const timeout = setTimeout(measure, 200);
    window.addEventListener('resize', measure);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', measure);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  const applyWrap = () => {
    const single = singleSetWidthRef.current;
    if (!single || single <= 0) return;

    // Keep currentX within [-2 * single, -single]
    while (currentXRef.current <= -2 * single) {
      currentXRef.current += single;
    }
    while (currentXRef.current > -single) {
      currentXRef.current -= single;
    }
  };

  const setTrackPos = (x) => {
    currentXRef.current = x;
    applyWrap();
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
    }
  };

  const startMomentum = () => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    const step = () => {
      if (Math.abs(velocityRef.current) < 0.1) {
        velocityRef.current = 0;
        return;
      }

      setTrackPos(currentXRef.current + velocityRef.current);
      velocityRef.current *= 0.94; // Smooth friction damping

      rafIdRef.current = requestAnimationFrame(step);
    };

    rafIdRef.current = requestAnimationFrame(step);
  };

  const handlePointerDown = (e) => {
    if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);

    isDraggingRef.current = true;
    setIsDraggingState(true);
    startXRef.current = e.clientX;
    lastPointerXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    movedDistanceRef.current = 0;

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;

    const currentX = e.clientX;
    const delta = currentX - lastPointerXRef.current;
    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);

    movedDistanceRef.current += Math.abs(delta);

    // Compute instantaneous velocity with moving average
    const instantVelocity = delta / dt * 16.6; // normalized to ~60fps
    velocityRef.current = velocityRef.current * 0.4 + instantVelocity * 0.6;

    lastPointerXRef.current = currentX;
    lastTimeRef.current = now;

    setTrackPos(currentXRef.current + delta);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setIsDraggingState(false);

    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
    window.removeEventListener('pointercancel', handlePointerUp);

    // Clamp velocity
    if (Math.abs(velocityRef.current) > 40) {
      velocityRef.current = Math.sign(velocityRef.current) * 40;
    }

    startMomentum();
  };

  const handleCardClick = (work, e) => {
    // If the user was dragging with displacement > 6px, do not navigate
    if (movedDistanceRef.current > 6) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (work && (work.id === 'bare-earth' || work.id === 'bared-earth')) {
      window.location.hash = '#bared-earth';
    } else {
      window.location.hash = '#work';
    }
  };

  return (
    <section className="discover-works-section" data-aos="fade-up">
      <div className="discover-works-container">

        {/* Left Header Column */}
        <div className="discover-works-left">
          <a href="#work" className="discover-title-anchor" style={{ textDecoration: 'none', color: 'inherit' }}>
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
                    d="M4 14 C 20 8, 32 22, 48 14 C 64 6, 76 22, 92 14 C 108 6, 120 22, 136 14 C 144 10, 150 16, 154 14"
                    stroke="#0055cb"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </span>
            </h2>
          </a>

          <a href="#work" className="see-more-btn">
            SEE MORE
          </a>
        </div>

        {/* Right Gallery Cards Infinite Drag Scroller */}
        <div className="discover-works-right">
          <div
            className={`works-drag-container ${isDraggingState ? 'is-dragging' : ''}`}
            ref={containerRef}
            onPointerDown={handlePointerDown}
          >
            <div className="works-drag-track" ref={trackRef}>
              {/* Triple loop of cards for seamless bidirectional infinite drag */}
              {[1, 2, 3].map((loopIndex) => (
                <React.Fragment key={`loop-${loopIndex}`}>
                  {WORKS_GALLERY.map((work) => (
                    <div
                      key={`work-${loopIndex}-${work.id}`}
                      className="work-gallery-card"
                      onClick={(e) => handleCardClick(work, e)}
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
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DiscoverWorks;
