import React, { useState, useRef, useEffect } from 'react';

/* ── Typewriter hook ── */
const useTypewriter = (text, speed = 25, trigger = true) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayed('');
      setDone(false);
      return;
    }
    setDisplayed('');
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, trigger]);

  return { displayed, done };
};

/* ── Single Terminal Card ── */
const TerminalCard = ({ project, index, isVisible }) => {
  const filename = `project_0${index + 1}.sh`;
  const { displayed: desc, done: descDone } = useTypewriter(
    project.oneLiner,
    20,
    isVisible
  );

  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0c]"
      style={{
        width: '85vw',
        maxWidth: '380px',
        height: 'min(72vh, 580px)',
        flexShrink: 0,
        scrollSnapAlign: 'center',
        boxShadow:
          '0 8px 40px rgba(255, 0, 0, 0.1), 0 2px 12px rgba(0,0,0,0.6)',
      }}
    >
      {/* ── Terminal Title Bar ── */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/10 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-[10px] text-gray-500 font-jetbrains tracking-wider">
          {filename}
        </span>
        <span className="ml-auto text-[9px] text-gray-600 font-jetbrains">
          bash
        </span>
      </div>

      {/* ── Image Strip (28%) ── */}
      <div className="relative w-full shrink-0" style={{ height: '28%' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/40 to-transparent" />
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
          }}
        />
      </div>

      {/* ── Terminal Body ── */}
      <div className="flex-1 flex flex-col px-4 py-4 overflow-y-auto gap-3 font-jetbrains text-[12px] leading-relaxed">
        {/* Project Name as prompt */}
        <div>
          <span className="text-red-500">❯</span>
          <span className="text-green-400 ml-1.5">./run</span>
          <span className="text-white ml-1.5 font-bold text-[14px]">
            {project.title}
          </span>
        </div>

        {/* Title link */}
        {project.titleLink && (
          <div className="text-red-300/80 text-[11px] -mt-1 pl-4">
            # {project.titleLink}
          </div>
        )}

        {/* Description with typewriter */}
        <div className="text-gray-200 pl-4 min-h-[36px]">
          <span className="text-gray-500 mr-1">$</span>
          <span className="text-gray-500 mr-1">echo</span> "
          <span className="text-white">{desc}</span>
          {!descDone && (
            <span className="animate-pulse text-red-500">▌</span>
          )}
          "
        </div>

        {/* Role */}
        <div className="text-gray-400 text-[11px] pl-4 border-l border-red-500/30 ml-1">
          {project.role}
        </div>

        {/* Challenges */}
        {project.challenges.length > 0 && (
          <div className="mt-1">
            <div className="text-gray-500 text-[10px] tracking-widest uppercase mb-1.5">
              <span className="text-red-500">❯</span> cat challenges.log
            </div>
            <div className="space-y-1.5 pl-4">
              {project.challenges.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-1.5 text-gray-200 text-[11px]"
                >
                  <span className="text-yellow-500 shrink-0 mt-0.5">⚠</span>
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-auto pt-3">
          <div className="text-gray-500 text-[10px] tracking-widest uppercase mb-2">
            <span className="text-red-500">❯</span> stack --list
          </div>
          <div className="flex flex-wrap gap-1.5 pl-4">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-[9px] px-2 py-0.5 rounded border border-green-500/25 bg-green-500/10 text-green-400 font-jetbrains"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        {project.github !== 'null' && project.liveDemo !== 'null' && (
          <div className="flex items-center gap-3 pt-3 border-t border-white/5 mt-2">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] text-red-400 hover:text-white transition-colors"
            >
              <span className="text-gray-500">$</span> open --live
              <span>→</span>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] text-gray-400 hover:text-white transition-colors"
            >
              <span className="text-gray-500">$</span> view --github
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Main Horizontal Snap Scroller ── */
const MobileSnapScroller = ({ projects }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const index = Math.round(scrollLeft / containerWidth);
      setActiveIndex(Math.min(index, projects.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth;
    container.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-[85vh] flex flex-col items-center justify-center bg-black py-8">
      {/* Section Header */}
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mx-auto" />
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="w-full flex items-center gap-5 overflow-x-auto px-[7.5vw] pb-4"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {projects.map((project, index) => (
          <TerminalCard
            key={project.id}
            project={project}
            index={index}
            isVisible={activeIndex === index}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2.5 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to project ${idx + 1}`}
            className={`rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? 'bg-red-500 w-6 h-2'
                : 'bg-white/20 w-2 h-2 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
};

export default MobileSnapScroller;
