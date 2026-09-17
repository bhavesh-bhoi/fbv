import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InteractiveImageShowcase.css';

// Rich card data for each project matching the reference screenshots
export const PROJECTS_DATA = [
  {
    id: 'mosi-skin',
    title: 'Mosi Skin',
    displayTitle: 'Mosi Skin',
    isSerif: false,
    cards: [
      {
        id: 'mosi-1',
        type: 'top-left-horizontal',
        render: () => (
          <div className="card-mosi-logo-light">
            <div className="card-inner-flex-center">
              <span className="mosi-logo-main">
                MOSI <span className="sparkle-star">✦</span> SKIN
              </span>
            </div>
          </div>
        ),
      },
      {
        id: 'mosi-2',
        type: 'top-right-square',
        render: () => (
          <div className="card-mosi-dark-square">
            <div className="card-inner-flex-center">
              <span className="mosi-dark-line serif">MOSI</span>
              <span className="sparkle-star-white">✦</span>
              <span className="mosi-dark-line serif">SKIN</span>
            </div>
          </div>
        ),
      },
      {
        id: 'mosi-3',
        type: 'mid-left-portrait',
        render: () => (
          <div className="card-flyer-handheld">
            <div className="flyer-sheet">
              <div className="flyer-top">
                <span className="flyer-title serif">Treatment Rituals</span>
                <span className="sparkle-star-sm">✦</span>
              </div>
              <div className="flyer-steps">
                <div className="f-step"><div className="f-thumb f1" /><span>01. Cleanse</span></div>
                <div className="f-step"><div className="f-thumb f2" /><span>02. Tone</span></div>
                <div className="f-step"><div className="f-thumb f3" /><span>03. Serum</span></div>
                <div className="f-step"><div className="f-thumb f4" /><span>04. Glow</span></div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'mosi-4',
        type: 'bottom-center-left-overlap',
        render: () => (
          <div className="card-bag-portrait">
            <div className="bag-model-backdrop">
              <div className="bag-3d-mockup">
                <div className="bag-handle-loop" />
                <div className="bag-body-box">
                  <span className="bag-foil-text">MOSI SKIN</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'mosi-5',
        type: 'bottom-right-grid',
        render: () => (
          <div className="card-moodboard-slate">
            <div className="slate-tiles">
              <div className="tile t1" />
              <div className="tile t2"><span className="serif">“Sacred Skin”</span></div>
              <div className="tile t3" />
              <div className="tile t4" />
              <div className="tile t5"><span>NEW SERVICE</span></div>
              <div className="tile t6" />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 'pretty-baby-things',
    title: 'PRETTY BABY THINGS',
    displayTitle: 'PRETTY BABY THINGS',
    isSerif: true,
    cards: [
      {
        id: 'pbt-1',
        type: 'top-left-horizontal',
        render: () => (
          <div className="card-pbt-logo-light">
            <div className="card-inner-flex-center">
              <span className="pbt-logo-main serif">
                PRETTY BABY THINGS <span className="sparkle-star">✦</span>
              </span>
              <span className="pbt-sub">BOUTIQUE ATELIER</span>
            </div>
          </div>
        ),
      },
      {
        id: 'pbt-2',
        type: 'top-right-square',
        render: () => (
          <div className="card-pbt-dark-square">
            <div className="card-inner-flex-center">
              <span className="pbt-monogram serif">PBT</span>
              <span className="sparkle-star-gold">✦</span>
              <span className="pbt-est">EST. 2024</span>
            </div>
          </div>
        ),
      },
      {
        id: 'pbt-3',
        type: 'mid-left-portrait',
        render: () => (
          <div className="card-pbt-silk">
            <div className="silk-sheet">
              <div className="silk-ribbon" />
              <div className="silk-tag">
                <span className="serif">Silk & Linen</span>
                <span className="tag-price">SPRING / SUMMER</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'pbt-4',
        type: 'bottom-center-left-overlap',
        render: () => (
          <div className="card-pbt-tote">
            <div className="tote-body">
              <span className="tote-text serif">PBT</span>
            </div>
          </div>
        ),
      },
      {
        id: 'pbt-5',
        type: 'bottom-right-grid',
        render: () => (
          <div className="card-pbt-moodboard">
            <div className="slate-tiles">
              <div className="tile p1" />
              <div className="tile p2"><span className="serif">“Pure Softness”</span></div>
              <div className="tile p3" />
              <div className="tile p4" />
              <div className="tile p5"><span>EDITION 02</span></div>
              <div className="tile p6" />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 'inner-matter',
    title: 'Inner Matter',
    displayTitle: 'INNER MATTER',
    isSerif: true,
    cards: [
      {
        id: 'im-1',
        type: 'top-left-horizontal',
        render: () => (
          <div className="card-im-dark-square">
            <div className="im-dark-content">
              <span className="im-meta">EST. 2022</span>
              <div className="im-arch-icon">][</div>
              <h3 className="im-title-serif serif">INNER MATTER</h3>
              <span className="im-sub">FROM WITHIN</span>
            </div>
          </div>
        ),
      },
      {
        id: 'im-2',
        type: 'top-right-square',
        render: () => (
          <div className="card-im-painted-circle">
            <div className="painted-brush-circle" />
            <div className="circle-screens">
              <div className="screen-card s1">
                <span className="s-tag">SIGNATURE RITUALS</span>
                <div className="s-thumb" />
              </div>
              <div className="screen-card s2">
                <div className="s-face-thumb" />
                <span className="s-tag serif">Deep Essence</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'im-3',
        type: 'mid-left-portrait',
        render: () => (
          <div className="card-im-foam-bottle">
            <div className="foam-bottle-bg">
              <div className="pump-dispenser" />
              <div className="foam-cloud" />
              <div className="bottle-label">
                <span className="label-brand serif">TROPICAL STILLNESS</span>
                <span className="label-sub">PURIFYING BODY WASH</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'im-4',
        type: 'bottom-center-left-overlap',
        render: () => (
          <div className="card-im-sand-arch">
            <div className="im-sand-inner">
              <div className="im-gold-arch-symbol">][</div>
              <span className="im-sand-caption">SANCTUARY</span>
            </div>
          </div>
        ),
      },
      {
        id: 'im-5',
        type: 'mid-right-portrait',
        render: () => (
          <div className="card-im-foliage-board">
            <div className="foliage-backdrop">
              <div className="sign-board">
                <span className="sign-icon">][</span>
                <span className="sign-title serif">INNER MATTER</span>
                <span className="sign-desc">AN IMMERSIVE SPA EXPERIENCE ROOTED IN RITUAL, BALANCE, AND STILLNESS.</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'im-6',
        type: 'bottom-right-grid',
        render: () => (
          <div className="card-im-olive-horizontal">
            <div className="olive-card-content">
              <span className="olive-est">EST. 2022</span>
              <h4 className="olive-title serif">INNER MATTER</h4>
              <span className="olive-sub">PREMIUM SPA</span>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 'shared-ground',
    title: 'SHARED GROUND',
    displayTitle: 'SHARED GROUND',
    isSerif: true,
    cards: [
      {
        id: 'sg-1',
        type: 'top-left-horizontal',
        render: () => (
          <div className="card-sg-terracotta">
            <div className="card-inner-flex-center">
              <span className="sg-title-clean">SHARED GROUND</span>
              <span className="sg-sub">CERAMICS & ARCHITECTURE</span>
            </div>
          </div>
        ),
      },
      {
        id: 'sg-2',
        type: 'top-right-square',
        render: () => (
          <div className="card-sg-stone">
            <div className="card-inner-flex-center">
              <div className="sg-emblem">✦</div>
              <span className="sg-stone-title serif">SHARED GROUND</span>
              <span className="sg-meta">STUDIO 04</span>
            </div>
          </div>
        ),
      },
      {
        id: 'sg-3',
        type: 'mid-left-portrait',
        render: () => (
          <div className="card-sg-vessel">
            <div className="vessel-sunlight">
              <div className="ceramic-silhouette" />
              <span className="vessel-caption serif">Raw Clay No. 12</span>
            </div>
          </div>
        ),
      },
      {
        id: 'sg-4',
        type: 'bottom-center-left-overlap',
        render: () => (
          <div className="card-sg-kraft">
            <div className="kraft-box">
              <div className="linen-cord" />
              <span className="kraft-stamp">HANDMADE</span>
            </div>
          </div>
        ),
      },
      {
        id: 'sg-5',
        type: 'bottom-right-grid',
        render: () => (
          <div className="card-sg-materials">
            <div className="slate-tiles">
              <div className="tile s-clay" />
              <div className="tile s-quote"><span className="serif">“Earth in Form”</span></div>
              <div className="tile s-sand" />
              <div className="tile s-rock" />
              <div className="tile s-kiln"><span>GALLERY</span></div>
              <div className="tile s-linen" />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: 'bare-earth',
    title: 'Bare Earth',
    displayTitle: 'Bare Earth',
    isSerif: true,
    cards: [
      {
        id: 'be-1',
        type: 'top-left-horizontal',
        render: () => (
          <div className="card-be-oatmeal">
            <div className="card-inner-flex-center">
              <span className="be-logo-text serif">Bare Earth</span>
              <span className="be-sub">RAW BOTANICAL SCIENCE</span>
            </div>
          </div>
        ),
      },
      {
        id: 'be-2',
        type: 'top-right-square',
        render: () => (
          <div className="card-be-sage">
            <div className="card-inner-flex-center">
              <span className="be-sage-title serif">BARE EARTH</span>
              <span className="be-botanical-icon">🌿</span>
              <span className="be-sage-sub">100% ORGANIC</span>
            </div>
          </div>
        ),
      },
      {
        id: 'be-3',
        type: 'mid-left-portrait',
        render: () => (
          <div className="card-be-bottle">
            <img src="/portfolio_1.png" alt="Bare Earth Serum" className="be-photo" />
            <div className="photo-badge serif">Botanical Serum</div>
          </div>
        ),
      },
      {
        id: 'be-4',
        type: 'bottom-center-left-overlap',
        render: () => (
          <div className="card-be-packaging">
            <img src="/portfolio_2.png" alt="Bare Earth Oil" className="be-photo" />
          </div>
        ),
      },
      {
        id: 'be-5',
        type: 'bottom-right-grid',
        render: () => (
          <div className="card-be-grid">
            <div className="slate-tiles">
              <div className="tile b1" />
              <div className="tile b2"><span className="serif">“Born from Nature”</span></div>
              <div className="tile b3" />
              <div className="tile b4" />
              <div className="tile b5"><span>ORGANIC</span></div>
              <div className="tile b6" />
            </div>
          </div>
        ),
      },
    ],
  },
];

const InteractiveImageShowcase = ({
  projects = PROJECTS_DATA,
  activeProjectIndex: externalIndex,
  onProjectChange,
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = externalIndex !== undefined ? externalIndex : internalIndex;

  const setActiveIndex = useCallback(
    (newIndex) => {
      const count = projects.length;
      const normalized = ((newIndex % count) + count) % count;
      if (externalIndex === undefined) {
        setInternalIndex(normalized);
      }
      if (onProjectChange) {
        onProjectChange(normalized);
      }
    },
    [projects.length, externalIndex, onProjectChange]
  );

  const nextProject = useCallback(() => {
    setActiveIndex(activeIndex + 1);
  }, [activeIndex, setActiveIndex]);

  const prevProject = useCallback(() => {
    setActiveIndex(activeIndex - 1);
  }, [activeIndex, setActiveIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextProject, prevProject]);

  const currentProject = projects[activeIndex] || projects[0];

  return (
    <div className="interactive-showcase-stage">
      {/* Central Typography Navigation matching the screenshots */}
      <div className="center-project-list">
        {projects.map((proj, idx) => {
          const isActive = idx === activeIndex;
          return (
            <motion.button
              key={proj.id}
              type="button"
              className={`project-nav-item ${isActive ? 'active-item' : 'inactive-item'} ${
                !isActive ? 'serif' : ''
              }`}
              onClick={() => setActiveIndex(idx)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {isActive
                ? proj.id === 'inner-matter'
                  ? 'INNER MATTER'
                  : proj.id === 'mosi-skin'
                  ? 'Mosi Skin'
                  : proj.title
                : proj.title}
            </motion.button>
          );
        })}
      </div>

      {/* Floating Surrounding Cards Layer */}
      <motion.div
        className="floating-cards-layer"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.25}
        onDragEnd={(e, info) => {
          if (info.offset.x < -40 || info.velocity.x < -200) {
            nextProject();
          } else if (info.offset.x > 40 || info.velocity.x > 200) {
            prevProject();
          }
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            className="cards-cluster"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 24,
              mass: 0.8,
            }}
          >
            {currentProject.cards.map((card, cIdx) => (
              <motion.div
                key={card.id}
                className={`showcase-card pos-${card.type}`}
                initial={{ opacity: 0, y: 25, scale: 0.88 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 22,
                  delay: cIdx * 0.04,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -6,
                  transition: { duration: 0.25 },
                }}
                onClick={nextProject}
              >
                {card.render()}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Bottom Circular Waypoints and Controls */}
      <div className="showcase-bottom-controls">
        <button
          type="button"
          className="arc-btn prev-btn"
          onClick={prevProject}
          aria-label="Previous project"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="arc-dots">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              className={`arc-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Select ${p.title}`}
            >
              <span className="dot-core" />
              {idx === activeIndex && (
                <motion.span
                  className="dot-ring"
                  layoutId="activeArcRing"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="arc-btn next-btn"
          onClick={nextProject}
          aria-label="Next project"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* "SEE MORE" pill button matching the reference screenshots */}
      <div className="see-more-wrap">
        <a href="#work" className="btn-pill btn-transparent">
          SEE MORE
        </a>
      </div>
    </div>
  );
};

export default InteractiveImageShowcase;
