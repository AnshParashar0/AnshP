import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);

  const handleDragStart = (e, info) => {
    setDragStart(info.point.x);
  };

  const handleDragEnd = (e, info) => {
    const dragEnd = info.point.x;
    const dragDistance = dragStart - dragEnd;
    
    // threshold for swipe
    if (dragDistance > 50 && currentIndex < projects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (dragDistance < -50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="w-full h-full flex items-center justify-center relative perspective-[1000px]">
        <AnimatePresence initial={false}>
          {projects.map((project, index) => {
            // Calculate distance from active index
            const distance = index - currentIndex;
            
            // Only render cards that are close to the current index for performance
            if (Math.abs(distance) > 2) return null;

            return (
              <motion.div
                key={project.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                initial={{ 
                  x: distance * 100 + "%", 
                  scale: 0.8, 
                  opacity: 0,
                  rotateY: distance * -15 
                }}
                animate={{ 
                  x: distance * 110 + "%", // Spacing between cards
                  scale: distance === 0 ? 1 : 0.85,
                  opacity: distance === 0 ? 1 : 0.4,
                  rotateY: distance * -15,
                  zIndex: projects.length - Math.abs(distance)
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute flex flex-col rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10"
                style={{
                  width: '75vw',
                  height: '80vh',
                  boxShadow: distance === 0 ? '0 12px 40px rgba(255, 0, 0, 0.15)' : 'none',
                }}
              >
                {/* Top 30% - Image */}
                <div className="relative w-full" style={{ height: '30%' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>

                {/* Bottom 70% - Details */}
                <div className="relative w-full flex flex-col p-5 overflow-y-auto custom-scrollbar" style={{ height: '70%' }}>
                  <h3 className="font-bold text-xl text-white font-jetbrains leading-tight mb-1">
                    {project.title}
                  </h3>
                  <h5 className="font-normal text-sm text-red-400 font-jetbrains mb-3">
                    {project.titleLink}
                  </h5>

                  <p className="text-gray-300 text-sm font-medium mb-3">
                    {project.oneLiner}
                  </p>
                  
                  <p className="text-gray-500 text-xs italic border-l-2 border-red-500/50 pl-3 mb-4">
                    "{project.role}"
                  </p>

                  <div className="mb-4">
                    <h4 className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-2 font-jetbrains">
                      Challenges
                    </h4>
                    <div className="space-y-2">
                      {project.challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                          <span className="text-red-500">→</span>
                          <p>{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[9px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-jetbrains"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 font-jetbrains text-xs">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-red-500 transition-colors border border-white/10 px-3 py-1.5 rounded-lg bg-white/5"
                      >
                        GitHub 
                      </a>
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-red-500 hover:text-white transition-colors font-bold"
                      >
                        Live Demo →
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-red-500 w-4' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
      
      {/* Swipe Hint */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 font-jetbrains tracking-widest uppercase">
        Swipe to explore
      </div>
    </div>
  );
};

export default MobileProjectCarousel;
