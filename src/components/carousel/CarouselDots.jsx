import React from 'react';

const CarouselDots = ({ count, activeIndex }) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '28px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '8px',
        zIndex: 10,
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={i}
            style={{
              width: isActive ? '24px' : '6px',
              height: '6px',
              borderRadius: isActive ? '3px' : '50%',
              background: isActive ? '#ff0000' : 'rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isActive ? '0 0 8px rgba(255, 0, 0, 0.5)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
};

export default CarouselDots;
