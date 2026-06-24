import React from 'react';

const CarouselCard = ({ project, style, isActive }) => {
  return (
    <div
      className="carousel-card"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '330px',
        height: '420px',
        marginTop: '-210px',
        marginLeft: '-165px',
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
      <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', flexShrink: 0 }}>
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
          fontSize: '22px',
          margin: 0,
          color: '#ffffff',
          fontFamily: "'JetBrains Mono', monospace",
          lineHeight: 1.2,
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '12px',
          margin: 0,
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.5,
          fontFamily: "'JetBrains Mono', monospace",
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginTop: '4px',
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

        {/* Action Links */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: 'auto',
        }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontFamily: "'JetBrains Mono', monospace",
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.color = '#ff0000'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
          >
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontFamily: "'JetBrains Mono', monospace",
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.color = '#ff0000'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
          >
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
