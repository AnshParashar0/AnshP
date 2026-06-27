import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChallengeLine = ({ text }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.02, delayChildren: 0.3 } }
      }}
      className="flex items-start gap-2"
    >
      <span className="text-red-500 font-jetbrains mt-1">→</span>
      <p className="text-gray-400 font-jetbrains text-sm">
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            {char}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
};

const ProjectDetailsPanel = ({ projects, activeIndex }) => {
  const activeProject = projects[activeIndex];

  return (
    <div className="w-full h-full flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-12 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col max-w-xl mx-auto lg:mx-0"
        >
          {/* Header */}
          <div className="mb-12 hidden lg:block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full mt-4" />
          </div>

          {/* Counter */}
          <div className="text-gray-500 font-jetbrains text-sm tracking-widest mb-4">
            {`{ 0${activeIndex + 1} / 0${projects.length} }`}
          </div>

          {/* Project Name */}
          <h3 className="text-4xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            {activeProject.title}
          </h3>
          <h5 className="text-2xl md:text-3xl font-normal text-red-300 mb-3 tracking-tight">
            {activeProject.titleLink}
          </h5>

          {/* One-liner */}
          <p className="text-xl text-gray-300 font-medium mb-4">
            {activeProject.oneLiner}
          </p>

          {/* Role */}
          <p className="text-gray-500 text-sm leading-relaxed mb-8 italic border-l-2 border-red-500/50 pl-4">
            "{activeProject.role}"
          </p>

          {/* Challenges */}
          <div className="mb-8 space-y-3">
            <h4 className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-3 font-jetbrains">
              ── Challenges ──
            </h4>
            {activeProject.challenges.map((challenge, idx) => (
              <ChallengeLine key={idx} text={challenge} />
            ))}
          </div>

          {/* Stack */}
          <div className="mb-10">
            <h4 className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-3 font-jetbrains">
              ── Stack ──
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {activeProject.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-jetbrains text-gray-300 bg-white/5 border border-white/10 rounded-full cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-6 font-jetbrains">
            <a 
              href={activeProject.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white hover:text-red-500 transition-colors border border-white/10 hover:border-red-500/30 px-5 py-2.5 rounded-lg bg-white/5 text-sm"
            >
              GitHub 
              <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href={activeProject.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-red-700 hover:text-white transition-colors text-lg"
            >
              Live Demo
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetailsPanel;
