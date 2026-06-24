import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import * as LucideIcons from 'lucide-react';
import { skills } from '../data';

/* ── Decode text effect ──────────────────────────────────────── */
const GLITCH_CHARS = '01アイウエオカキクケコ@#$%&';

const DecodeText = ({ text, active }) => {
  const [display, setDisplay] = useState('');
  const intervalRef = useRef(null);
  const iterRef = useRef(0);
  const prevActiveRef = useRef(false);

  useEffect(() => {
    // Only trigger decode when transitioning from inactive to active
    if (active && !prevActiveRef.current) {
      iterRef.current = 0;
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setDisplay(
          text
            .split('')
            .map((char, i) => {
              if (i < iterRef.current) return char;
              return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
            })
            .join('')
        );
        iterRef.current += 0.8;
        if (iterRef.current >= text.length + 1) {
          clearInterval(intervalRef.current);
          setDisplay(text);
        }
      }, 40);
    } else if (!active) {
      clearInterval(intervalRef.current);
      setDisplay('');
    }
    prevActiveRef.current = active;
    return () => clearInterval(intervalRef.current);
  }, [active, text]);

  if (!active && !display) return null;

  return (
    <span
      className="font-jetbrains text-[11px] sm:text-xs tracking-wider"
      style={{
        color: '#ff0000',
        textShadow: '0 0 8px rgba(255,0,0,0.6)',
      }}
    >
      {display}
    </span>
  );
};

/* ── Falling matrix characters (decoration for decode zone) ── */
const MatrixRain = React.memo(() => {
  const cols = 5;
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {Array.from({ length: cols }).map((_, i) => (
        <div
          key={i}
          className="font-jetbrains"
          style={{
            position: 'absolute',
            left: `${10 + (i * 80) / cols}%`,
            top: '-20px',
            fontSize: '11px',
            color: 'rgba(255,0,0,0.12)',
            animation: `matrixDrop ${2 + i * 0.6}s linear infinite`,
            animationDelay: `${i * 0.4}s`,
            whiteSpace: 'nowrap',
            writingMode: 'vertical-rl',
            letterSpacing: '4px',
          }}
        >
          {Array.from({ length: 12 })
            .map(() => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)])
            .join('')}
        </div>
      ))}
    </div>
  );
});

/* ── Main Skills component ───────────────────────────────────── */
const ITEM_WIDTH = 150; // matches minWidth of each item
const TOTAL_ITEMS = skills.length;
const TRACK_HALF = TOTAL_ITEMS * ITEM_WIDTH; // half the track (since we duplicate 2x for seamless loop)
const DURATION = 12; // seconds for one full loop

const Skills = () => {
  const wrapperRef = useRef(null);
  const [activeSkillIdx, setActiveSkillIdx] = useState(-1);
  const startTimeRef = useRef(null);

  // Calculate which skill is at center based on elapsed time
  const detectCenter = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const now = performance.now();
    if (!startTimeRef.current) startTimeRef.current = now;
    const elapsed = (now - startTimeRef.current) / 1000; // seconds

    const wrapperRect = wrapper.getBoundingClientRect();
    const centerX = wrapperRect.width / 2; // center relative to wrapper

    // How far the track has shifted (CSS animation: translateX 0 → -50%)
    const progress = (elapsed % DURATION) / DURATION;
    const trackOffset = progress * TRACK_HALF;

    // Find which item's center is closest to the wrapper's center
    let closestIdx = -1;
    let closestDist = Infinity;

    // Check both copies (original and duplicate)
    for (let copy = 0; copy < 2; copy++) {
      for (let i = 0; i < TOTAL_ITEMS; i++) {
        const itemCenter = copy * TRACK_HALF + i * ITEM_WIDTH + ITEM_WIDTH / 2 - trackOffset;
        const dist = Math.abs(itemCenter - centerX);
        if (dist < closestDist) {
          closestDist = dist;
          closestIdx = i;
        }
      }
    }

    // Only activate if close enough to the center zone (~half item width)
    if (closestDist < 80) {
      setActiveSkillIdx(closestIdx);
    } else {
      setActiveSkillIdx(-1);
    }
  }, []);

  useEffect(() => {
    let id;
    const tick = () => {
      detectCenter();
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [detectCenter]);

  // Build the extended track: 2 copies for seamless CSS loop
  const extendedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-black overflow-hidden">
      {/* Section Header */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
          <p className="mt-6 text-sm sm:text-base text-gray-500 max-w-xl mx-auto font-jetbrains">
            Technologies I use to build exceptional digital experiences.
          </p>
        </motion.div>
      </div>

      {/* Marquee + Decode Zone */}
      <div
        ref={wrapperRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '140px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* ── Decode zone (center column) ── */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '450px',
            transform: 'translateX(-50%)',
            zIndex: 15,
            pointerEvents: 'none',
          }}
        >
          {/* Vertical border lines */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(255,0,0,0.5), transparent)',
          }} />
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(255,0,0,0.5), transparent)',
          }} />

          {/* Top / bottom labels */}
          <div className="font-jetbrains" style={{
            position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)',
            fontSize: '10px', color: 'rgba(255,0,0,0.4)', letterSpacing: '2px', whiteSpace: 'nowrap',
          }}>
            ║ DECODE ║
          </div>
          <div className="font-jetbrains" style={{
            position: 'absolute', bottom: '-24px', left: '50%', transform: 'translateX(-50%)',
            fontSize: '10px', color: 'rgba(255,0,0,0.4)', letterSpacing: '2px', whiteSpace: 'nowrap',
          }}>
            ║ ══════ ║
          </div>

          {/* Glow */}
          <div style={{
            position: 'absolute', inset: '-20px -40px',
            background: 'radial-gradient(ellipse at center, rgba(255,0,0,0.08) 0%, transparent 70%)',
          }} />

          {/* Matrix rain */}
          <MatrixRain />
        </div>

        {/* ── Edge fade masks ── */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px',
          background: 'linear-gradient(to right, #000000 0%, transparent 100%)',
          zIndex: 12, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px',
          background: 'linear-gradient(to left, #000000 0%, transparent 100%)',
          zIndex: 12, pointerEvents: 'none',
        }} />

        {/* ── Scrolling marquee track ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: 'max-content',
            animation: `marqueeScroll ${DURATION}s linear infinite`,
          }}
        >
          {extendedSkills.map((skill, i) => {
            const realIdx = i % TOTAL_ITEMS;
            const isActive = realIdx === activeSkillIdx;
            const IconComponent = SiIcons[skill.icon] || FaIcons[skill.icon] || LucideIcons[skill.icon];

            return (
              <div
                key={`skill-${i}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  minWidth: `${ITEM_WIDTH}px`,
                  width: `${ITEM_WIDTH}px`,
                  padding: '16px 0',
                  position: 'relative',
                  transition: 'transform 0.2s ease-out',
                  transform: isActive ? 'scale(1.45)' : 'scale(1)',
                  zIndex: isActive ? 20 : 1,
                }}
              >
                {/* Scan line */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #ff0000, transparent)',
                      animation: 'scanSweep 0.6s ease-out forwards',
                      pointerEvents: 'none',
                      zIndex: 5,
                    }}
                  />
                )}

                {/* Icon */}
                <div
                  style={{
                    fontSize: '36px',
                    lineHeight: 1,
                    color: isActive ? '#ff0000' : 'rgba(255,255,255,0.12)',
                    filter: isActive
                      ? 'drop-shadow(0 0 10px rgba(255,0,0,0.8)) drop-shadow(0 0 24px rgba(255,0,0,0.4))'
                      : 'none',
                    transition: 'color 0.2s, filter 0.2s',
                    animation: isActive ? 'iconGlitch 0.3s ease-out' : 'none',
                  }}
                >
                  {IconComponent ? <IconComponent /> : null}
                </div>

                {/* Decoded name */}
                <div style={{ height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <DecodeText text={skill.name} active={isActive} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
