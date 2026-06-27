import React from 'react';

const CarouselCard = ({ project, style, isActive }) => {
  return (
    <div
      className="carousel-card"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '520px',
        height: '600px',
        marginTop: '-300px',
        marginLeft: '-260px',
        borderRadius: '16px',
        border: `1px solid ${isActive ? 'rgba(255, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`,
        boxShadow: isActive
          ? '0 12px 40px rgba(255, 0, 0, 0.15), 0 4px 16px rgba(0,0,0,0.4)'
          : '0 8px 24px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        boxSizing: 'border-box',
        transformOrigin: 'center center',
        willChange: 'transform, opacity',
        background: '#0a0a0a',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        ...style,
      }}
    >
      {/* Project Image */}
      <div style={{ position: 'relative', width: '100%', height: '480px', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            background: 'linear-gradient(to top, #0a0a0a, transparent)',
          }}
        />
      </div>

      {/* Card Content */}
      <div style={{
        padding: '16px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flex: 1,
      }}>
        <h3 style={{
          fontWeight: 700,
          fontSize: '18px',
          margin: 0,
          color: '#ffffff',
          fontFamily: "'JetBrains Mono', monospace",
          lineHeight: 1.2,
        }}>
          {project.title}
        </h3>
        <h5 style={{
          fontWeight: 400,
          fontSize: '14px',
          margin: 0,
          color: '#ff4444',
          fontFamily: "'JetBrains Mono', monospace",
            lineHeight: 1.2,
        }}>
          {project.titleLink}
        </h5>

        {/* Tech Stack Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginTop: 'auto',
        }}>
          {project.techStack.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              style={{
                fontSize: '10px',
                padding: '3px 8px',
                borderRadius: '20px',
                background: 'rgba(255, 0, 0, 0.1)',
                color: '#ff4444',
                border: '1px solid rgba(255, 0, 0, 0.2)',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span
              style={{
                fontSize: '10px',
                padding: '3px 8px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'rgba(255,255,255,0.4)',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
