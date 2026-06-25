import React, { useRef, useState, useEffect, useCallback } from 'react';
import CarouselCard from './CarouselCard';
import CarouselDots from './CarouselDots';
import ProjectDetailsPanel from './ProjectDetailsPanel';

const ProjectCarousel = ({ projects }) => {
  const trackRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const n = projects.length;
  const radius = 300;

  const render = useCallback(
    (rot) => {
      const idx = Math.round((((-rot % 360) + 360) % 360) / (360 / n)) % n;
      setActiveIndex(idx);
      setRotation(rot);
    },
    [n]
  );

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const track = trackRef.current;
        if (!track) { ticking = false; return; }
        const rect = track.getBoundingClientRect();
        const total = track.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
        const progress = scrolled / Math.max(total, 1);
        const rot = progress * 360 ;
        render(rot);
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    render(0);
    return () => window.removeEventListener('scroll', onScroll);
  }, [render]);

  const getCardStyle = (index) => {
    const baseAngle = (index / n) * 360;
    const angle = ((baseAngle + rotation) * Math.PI) / 180;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    const scale = 0.72 + 0.28 * ((z + radius) / (2 * radius));
    const opacity = 0.4 + 0.6 * ((z + radius) / (2 * radius));
    const yLift = (1 - (z + radius) / (2 * radius)) * 18;
    const yRotation = (baseAngle + rotation) % 360;

    return {
      transform: `translate(${x.toFixed(1)}px, ${yLift.toFixed(1)}px) scale(${scale.toFixed(3)}) rotateY(${yRotation.toFixed(1)}deg)`,
      opacity: opacity.toFixed(2),
      zIndex: Math.round(z + radius),
    };
  };

  return (
    <div ref={trackRef} style={{ position: 'relative', height: '2400px' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          minHeight: '480px',
          display: 'flex',
          overflow: 'hidden',
          width: '100%',
        }}
        className="flex-col lg:flex-row"
      >
        {/* Left Column - Details Panel */}
        <div className="w-full lg:w-1/2 h-full z-20 flex-shrink-0 bg-black/50 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
          <ProjectDetailsPanel projects={projects} activeIndex={activeIndex} />
        </div>

        {/* Right Column - Orbit Carousel */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center relative flex-shrink-0">
          
          {/* "Scroll to rotate" hint */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center',
              zIndex: 10,
            }}
            className="hidden lg:block"
          >
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.3)',
                margin: 0,
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              scroll to rotate
            </p>
            {/* Animated scroll indicator */}
            <div
              style={{
                marginTop: '8px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '1px',
                  height: '24px',
                  background: 'linear-gradient(to bottom, rgba(255, 0, 0, 0.5), transparent)',
                  animation: 'scrollPulse 2s ease-in-out infinite',
                }}
              />
            </div>
          </div>

          {/* Orbit container */}
          <div
            style={{
              position: 'relative',
              width: '600px',
              height: '600px',
              perspective: '1000px',
            }}
          >
            {projects.map((project, index) => (
              <CarouselCard
                key={project.id}
                project={project}
                style={getCardStyle(index)}
                isActive={index === activeIndex}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
            <CarouselDots count={n} activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
