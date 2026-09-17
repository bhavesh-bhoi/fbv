import React, { useRef, useState, useEffect, useCallback } from 'react';
import './Logos.css';

const LOGOS_LIST = [
  {
    id: 'poster-club',
    type: 'poster-club',
    render: () => (
      <div className="brand-badge badge-poster-club">
        <span className="poster-bg-box"></span>
        <div className="poster-text">
          <span className="poster-line1">the</span>
          <span className="poster-line2">poster</span>
          <span className="poster-line3">club.</span>
        </div>
      </div>
    )
  },
  {
    id: 'clarity',
    type: 'clarity',
    render: () => (
      <div className="brand-badge badge-clarity">
        <div className="clarity-pill">Clarity</div>
        <div className="clarity-sub">BY NIKKI NOVO</div>
      </div>
    )
  },
  {
    id: 'bare-earth',
    type: 'bare-earth',
    render: () => (
      <div className="brand-badge badge-bare-earth">
        <div className="bare-box">
          <span className="bare-line">BARE</span>
          <span className="earth-line">EARTH</span>
        </div>
      </div>
    )
  },
  {
    id: 'shared-ground',
    type: 'shared-ground',
    render: () => (
      <div className="brand-badge badge-shared-ground">
        <span className="shared-line">SHARED</span>
        <span className="ground-line">GROUND</span>
      </div>
    )
  },
  {
    id: 'mosi-skin',
    type: 'mosi-skin',
    render: () => (
      <div className="brand-badge badge-mosi-skin">
        <span className="mosi-title">MOSI</span>
        <span className="mosi-sub">S K I N</span>
      </div>
    )
  },
  {
    id: 'pretty-baby',
    type: 'pretty-baby',
    render: () => (
      <div className="brand-badge badge-pretty-baby">
        <span className="pbt-badge">PRETTY BABY</span>
        <span className="pbt-sub">THINGS</span>
      </div>
    )
  },
  {
    id: 'inner-matter',
    type: 'inner-matter',
    render: () => (
      <div className="brand-badge badge-inner-matter">
        <span className="inner-line">INNER</span>
        <span className="matter-line">MATTER</span>
      </div>
    )
  },
  {
    id: 'si-her',
    type: 'si-her',
    render: () => (
      <div className="brand-badge badge-si-her">
        <span className="si-text">si</span>
        <span className="her-text">her</span>
      </div>
    )
  }
];

const Logos = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const groupRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const isHoveredRef = useRef(false);
  const groupWidthRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Measure one group width for seamless wrapping
  const updateMetrics = useCallback(() => {
    if (groupRef.current) {
      const width = groupRef.current.offsetWidth;
      if (width > 0) {
        groupWidthRef.current = width;
      }
    }
  }, []);

  useEffect(() => {
    updateMetrics();
    window.addEventListener('resize', updateMetrics);

    // Initial position in middle group
    if (containerRef.current && groupWidthRef.current > 0) {
      containerRef.current.scrollLeft = groupWidthRef.current;
    }

    let animationFrameId;
    const baseSpeed = 0.85; // Auto-scroll speed in px per frame

    const loop = () => {
      const container = containerRef.current;
      const groupWidth = groupWidthRef.current;

      if (container && groupWidth > 0) {
        // If not dragging and not hovering, advance scroll automatically
        if (!isDraggingRef.current) {
          if (Math.abs(velocityRef.current) > 0.05) {
            // Apply drag momentum decay
            container.scrollLeft -= velocityRef.current;
            velocityRef.current *= 0.92;
          } else if (!isHoveredRef.current) {
            // Normal auto-scroll forward (to the right, moving logos to the left)
            container.scrollLeft += baseSpeed;
          }
        }

        // Seamless infinite loop wrapping
        if (container.scrollLeft >= groupWidth * 2) {
          container.scrollLeft -= groupWidth;
        } else if (container.scrollLeft < groupWidth * 0.5) {
          container.scrollLeft += groupWidth;
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateMetrics);
    };
  }, [updateMetrics]);

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    // Only handle primary button
    if (e.button !== 0) return;
    setIsDragging(true);
    isDraggingRef.current = true;
    dragStartXRef.current = e.pageX;
    dragStartScrollRef.current = containerRef.current ? containerRef.current.scrollLeft : 0;
    velocityRef.current = 0;
    lastXRef.current = e.pageX;
    lastTimeRef.current = performance.now();
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const currentX = e.pageX;
    const deltaX = currentX - dragStartXRef.current;
    containerRef.current.scrollLeft = dragStartScrollRef.current - deltaX;

    // Calculate drag velocity for smooth release
    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      velocityRef.current = (currentX - lastXRef.current) / (dt / 16.6);
    }
    lastXRef.current = currentX;
    lastTimeRef.current = now;
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      setIsDragging(false);
      isDraggingRef.current = false;
    }
  };

  // Touch Handlers for Mobile
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      isDraggingRef.current = true;
      dragStartXRef.current = e.touches[0].pageX;
      dragStartScrollRef.current = containerRef.current ? containerRef.current.scrollLeft : 0;
      velocityRef.current = 0;
      lastXRef.current = e.touches[0].pageX;
      lastTimeRef.current = performance.now();
    }
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current || !containerRef.current || e.touches.length !== 1) return;
    const currentX = e.touches[0].pageX;
    const deltaX = currentX - dragStartXRef.current;
    containerRef.current.scrollLeft = dragStartScrollRef.current - deltaX;

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      velocityRef.current = (currentX - lastXRef.current) / (dt / 16.6);
    }
    lastXRef.current = currentX;
    lastTimeRef.current = now;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    isDraggingRef.current = false;
  };

  return (
    <section className="logos-section" data-aos="fade-up">
      <div className="logos-wrapper">
        {/* Left fixed header matching screenshot */}
        <div className="logos-title-area">
          <h2 className="logos-heading">
            discover<br />
            the logos
          </h2>
          <svg className="wavy-underline-svg" width="130" height="18" viewBox="0 0 130 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 9 C 14 1, 22 17, 34 9 C 46 1, 54 17, 66 9 C 78 1, 86 17, 98 9 C 110 1, 118 17, 128 9"
              stroke="#0055cb"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Right interactive draggable scroller track */}
        <div
          className={`logos-marquee-container ${isDragging ? 'is-dragging' : ''}`}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            handleMouseUp();
            isHoveredRef.current = false;
          }}
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          title="Drag to scroll left or right"
        >
          <div className="logos-marquee-track" ref={trackRef}>
            {/* Group 1 (Buffer) */}
            <div className="logos-marquee-group" ref={groupRef}>
              {LOGOS_LIST.map((logo) => (
                <div key={`logo-1-${logo.id}`} className="logo-badge-wrapper">
                  {logo.render()}
                </div>
              ))}
            </div>

            {/* Group 2 (Center Active Group) */}
            <div className="logos-marquee-group" aria-hidden="true">
              {LOGOS_LIST.map((logo) => (
                <div key={`logo-2-${logo.id}`} className="logo-badge-wrapper">
                  {logo.render()}
                </div>
              ))}
            </div>

            {/* Group 3 (Buffer for seamless right wrap) */}
            <div className="logos-marquee-group" aria-hidden="true">
              {LOGOS_LIST.map((logo) => (
                <div key={`logo-3-${logo.id}`} className="logo-badge-wrapper">
                  {logo.render()}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
