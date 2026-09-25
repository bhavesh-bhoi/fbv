import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './InteractiveImageShowcase.css';

// Rich card data for each project using uploaded sticker images
export const PROJECTS_DATA = [
  {
    id: 'tropez',
    title: 'Tropez',
    displayTitle: 'Tropez',
    isSerif: false,
    cards: [
      {
        id: 'tropez-1',
        number: 1,
        title: 'Top-Left Box',
        type: 'top-left-box',
        image: '/assets/Tropez 1.png',
        alt: 'Tropez - Top-Left Box',
      },
      {
        id: 'tropez-2',
        number: 2,
        title: 'Top-Right Box',
        type: 'top-right-box',
        image: '/assets/Tropez 2.png',
        alt: 'Tropez - Top-Right Box',
      },
      {
        id: 'tropez-3',
        number: 3,
        title: 'Mid-Left Box',
        type: 'mid-left-box',
        image: '/assets/Tropez 3.png',
        alt: 'Tropez - Mid-Left Box',
      },
      {
        id: 'tropez-4',
        number: 4,
        title: 'Bottom-Left Overlap Box',
        type: 'bottom-left-overlap-box',
        image: '/assets/Tropez 4.png',
        alt: 'Tropez - Bottom-Left Overlap Box',
      },
      {
        id: 'tropez-5',
        number: 5,
        title: 'Bottom-Right Box',
        type: 'bottom-right-box',
        image: '/assets/Tropez 5.png',
        alt: 'Tropez - Bottom-Right Box',
      },
    ],
  },
  {
    id: 'brew-studio',
    title: 'Brew Studio',
    displayTitle: 'Brew Studio',
    isSerif: true,
    cards: [
      {
        id: 'brew-studio-1',
        number: 1,
        title: 'Top-Left Box',
        type: 'top-left-box',
        image: '/assets/Brew Studio 1.png',
        alt: 'Brew Studio - Top-Left Box',
      },
      {
        id: 'brew-studio-2',
        number: 2,
        title: 'Top-Right Box',
        type: 'top-right-box',
        image: '/assets/Brew Studio 2.png',
        alt: 'Brew Studio - Top-Right Box',
      },
      {
        id: 'brew-studio-3',
        number: 3,
        title: 'Mid-Left Box',
        type: 'mid-left-box',
        image: '/assets/Brew Studio 3.png',
        alt: 'Brew Studio - Mid-Left Box',
      },
      {
        id: 'brew-studio-4',
        number: 4,
        title: 'Bottom-Left Overlap Box',
        type: 'bottom-left-overlap-box',
        image: '/assets/Brew Studio 4.png',
        alt: 'Brew Studio - Bottom-Left Overlap Box',
      },
      {
        id: 'brew-studio-5',
        number: 5,
        title: 'Bottom-Right Box',
        type: 'bottom-right-box',
        image: '/assets/Brew Studio 5.png',
        alt: 'Brew Studio - Bottom-Right Box',
      },
    ],
  },
  {
    id: 'brownie-bloom',
    title: 'Brownie Bloom',
    displayTitle: 'Brownie Bloom',
    isSerif: true,
    cards: [
      {
        id: 'brownie-bloom-1',
        number: 1,
        title: 'Top-Left Box',
        type: 'top-left-box',
        image: '/assets/Brownie Bloom 1.png',
        alt: 'Brownie Bloom - Top-Left Box',
      },
      {
        id: 'brownie-bloom-2',
        number: 2,
        title: 'Top-Right Box',
        type: 'top-right-box',
        image: '/assets/Brownie Bloom 2.png',
        alt: 'Brownie Bloom - Top-Right Box',
      },
      {
        id: 'brownie-bloom-3',
        number: 3,
        title: 'Mid-Left Box',
        type: 'mid-left-box',
        image: '/assets/Brownie Bloom 3.png',
        alt: 'Brownie Bloom - Mid-Left Box',
      },
      {
        id: 'brownie-bloom-4',
        number: 4,
        title: 'Bottom-Left Overlap Box',
        type: 'bottom-left-overlap-box',
        image: '/assets/Brownie Bloom 4.png',
        alt: 'Brownie Bloom - Bottom-Left Overlap Box',
      },
      {
        id: 'brownie-bloom-5',
        number: 5,
        title: 'Bottom-Right Box',
        type: 'bottom-right-box',
        image: '/assets/Brownie Bloom 5.png',
        alt: 'Brownie Bloom - Bottom-Right Box',
      },
      {
        id: 'brownie-bloom-6',
        number: 6,
        title: 'Mid-Right Box (alternate)',
        type: 'mid-right-box',
        image: '/assets/Brownie Bloom 6.png',
        alt: 'Brownie Bloom - Mid-Right Box (alternate)',
      },
    ],
  },
  {
    id: 'wild-bloom',
    title: 'Wild Bloom',
    displayTitle: 'Wild Bloom',
    isSerif: true,
    cards: [
      {
        id: 'wild-bloom-1',
        number: 1,
        title: 'Top-Left Box',
        type: 'top-left-box',
        image: '/assets/Wild Bloom 1.png',
        alt: 'Wild Bloom - Top-Left Box',
      },
      {
        id: 'wild-bloom-2',
        number: 2,
        title: 'Top-Right Box',
        type: 'top-right-box',
        image: '/assets/Wild Bloom 2.png',
        alt: 'Wild Bloom - Top-Right Box',
      },
      {
        id: 'wild-bloom-3',
        number: 3,
        title: 'Mid-Left Box',
        type: 'mid-left-box',
        image: '/assets/Wild Bloom 3.png',
        alt: 'Wild Bloom - Mid-Left Box',
      },
      {
        id: 'wild-bloom-4',
        number: 4,
        title: 'Bottom-Left Overlap Box',
        type: 'bottom-left-overlap-box',
        image: '/assets/Wild Bloom 4.png',
        alt: 'Wild Bloom - Bottom-Left Overlap Box',
      },
      {
        id: 'wild-bloom-5',
        number: 5,
        title: 'Bottom-Right Box',
        type: 'bottom-right-box',
        image: '/assets/Wild Bloom 5.png',
        alt: 'Wild Bloom - Bottom-Right Box',
      },
    ],
  },
  {
    id: 'life-os',
    title: 'Life OS',
    displayTitle: 'Life OS',
    isSerif: true,
    cards: [
      {
        id: 'life-os-1',
        number: 1,
        title: 'Top-Left Box',
        type: 'top-left-box',
        image: '/assets/Life OS 1.png',
        alt: 'Life OS - Top-Left Box',
      },
      {
        id: 'life-os-2',
        number: 2,
        title: 'Top-Right Box',
        type: 'top-right-box',
        image: '/assets/Life OS 2.png',
        alt: 'Life OS - Top-Right Box',
      },
      {
        id: 'life-os-3',
        number: 3,
        title: 'Mid-Left Box',
        type: 'mid-left-box',
        image: '/assets/Life OS 3.png',
        alt: 'Life OS - Mid-Left Box',
      },
      {
        id: 'life-os-4',
        number: 4,
        title: 'Bottom-Left Overlap Box',
        type: 'bottom-left-overlap-box',
        image: '/assets/Life OS 4.png',
        alt: 'Life OS - Bottom-Left Overlap Box',
      },
      {
        id: 'life-os-5',
        number: 5,
        title: 'Bottom-Right Box',
        type: 'bottom-right-box',
        image: '/assets/Life OS 5.png',
        alt: 'Life OS - Bottom-Right Box',
      },
    ],
  },
];

const STICKER_ROTATIONS = {
  'top-left-box': -3,
  'top-right-box': 3.5,
  'mid-left-box': -2,
  'bottom-left-overlap-box': 2.5,
  'bottom-right-box': 2,
  'mid-right-box': -2.5,
  'top-left-horizontal': -3,
  'top-right-square': 3.5,
  'mid-left-portrait': -2,
  'bottom-center-left-overlap': 2.5,
  'mid-right-portrait': -2.5,
  'bottom-right-grid': 2,
};

const DraggableSticker = ({
  card,
  stageRef,
  zIndex,
  onBringToFront,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const baseRotation = STICKER_ROTATIONS[card.type] || 0;

  return (
    <motion.div
      className={`showcase-card sticker-item pos-${card.type} ${
        isDragging ? 'is-dragging' : ''
      }`}
      drag
      dragConstraints={stageRef}
      dragElastic={0}
      dragMomentum={false}
      dragSnapToOrigin={false}
      dragTransition={{ power: 0, timeConstant: 0 }}
      style={{ zIndex }}
      onPointerDown={() => onBringToFront(card.id)}
      onDragStart={() => {
        setIsDragging(true);
        onBringToFront(card.id);
      }}
      onDragEnd={() => {
        setIsDragging(false);
      }}
      initial={{ opacity: 0, scale: 0.88, rotate: baseRotation }}
      animate={{ opacity: 1, scale: 1, rotate: baseRotation }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.18 } }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.15 },
      }}
      whileDrag={{
        scale: 1.06,
        cursor: 'grabbing',
      }}
    >
      <div className="sticker-content-wrap">
        {card.image ? (
          <img
            src={card.image}
            alt={card.alt || card.title}
            className="sticker-image"
            draggable={false}
          />
        ) : card.render ? (
          card.render()
        ) : null}
      </div>
    </motion.div>
  );
};

const InteractiveImageShowcase = ({
  projects = PROJECTS_DATA,
  activeProjectIndex: externalIndex,
  onProjectChange,
}) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = externalIndex !== undefined ? externalIndex : internalIndex;

  const [cardZIndexMap, setCardZIndexMap] = useState({});
  const topZRef = useRef(30);
  const [boardResetKey, setBoardResetKey] = useState(0);
  const stageRef = useRef(null);

  const bringToFront = (cardId) => {
    topZRef.current += 1;
    const nextZ = topZRef.current;
    setCardZIndexMap((prev) => ({
      ...prev,
      [cardId]: nextZ,
    }));
  };

  const resetStickers = () => {
    setBoardResetKey((k) => k + 1);
    setCardZIndexMap({});
    topZRef.current = 30;
  };

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
    <div className="interactive-showcase-stage" ref={stageRef}>
      {/* Central Typography Navigation matching the reference screenshots */}
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
              {isActive ? proj.displayTitle || proj.title : proj.title}
            </motion.button>
          );
        })}
      </div>

      {/* Interactive Sticker Board Canvas */}
      <div className="sticker-board-canvas">
        <AnimatePresence mode="wait">
          <motion.div
            key={`board-${currentProject.id}-${boardResetKey}`}
            className="cards-cluster"
          >
            {currentProject.cards.map((card) => (
              <DraggableSticker
                key={card.id}
                card={card}
                stageRef={stageRef}
                zIndex={cardZIndexMap[card.id]}
                onBringToFront={bringToFront}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls with Pagination Dots and Reset Board */}
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

        {/* Reset Stickers Button */}
        <button
          type="button"
          className="reset-stickers-btn"
          onClick={resetStickers}
          title="Reset stickers to initial layout"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          <span>Reset Board</span>
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
