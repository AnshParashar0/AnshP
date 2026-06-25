import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myphotot.PNG';

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-black text-white py-24 px-6 sm:px-12 md:px-24 overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center">
        
        {/* Left Column (60%) */}
        <div className="md:col-span-7 flex flex-col justify-center space-y-8 z-10">
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            className="text-red-500/80 font-jetbrains text-sm tracking-[0.2em] uppercase"
          >
            {'{ about_me }'}
          </motion.div>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }} 
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-jetbrains tracking-tight"
          >
             <span className="text-red-500 tracking-normal">MERN</span>-Stack.
          </motion.h2>

          {/* Bio */}
          <motion.p 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }} 
            className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl font-jetbrains"
          >
            Merging Code with intelligence
          </motion.p>

          {/* What I Do blocks */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }} 
            className="flex flex-col space-y-4 pt-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-4 h-[2px] bg-red-500 mt-3 shrink-0" />
              <div>
                <span className="text-white font-semibold font-jetbrains">Frontend</span>
                <span className="text-gray-500 font-jetbrains ml-2">→ React + Framer Motion, GSAP,TailwindCss</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-4 h-[2px] bg-red-500 mt-3 shrink-0" />
              <div>
                <span className="text-white font-semibold font-jetbrains">Backend</span>
                <span className="text-gray-500 font-jetbrains ml-2">→ Node.js, Express, MongoDB, secure APIs</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-4 h-[2px] bg-red-500 mt-3 shrink-0" />
              <div>
                <span className="text-white font-semibold font-jetbrains">Currently</span>
                <span className="text-gray-500 font-jetbrains ml-2">→ Building innovative full-stack solutions</span>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Strip */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }} 
            className="flex flex-wrap gap-3 pt-4"
          >
            {['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Framer Motion', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="px-3 py-1 text-sm font-jetbrains text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-red-500/50 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }} 
            className="flex gap-6 pt-4 font-jetbrains"
          >
            <a href="#resume" className="group flex items-center gap-2 text-white hover:text-red-500 transition-colors">
              View Resume 
              <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#contact" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              Let's Connect
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column (40%) - ID Card */}
        <div className="md:col-span-5 relative flex justify-center items-start min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full max-w-[300px]"
          >
            {/* Lanyard Line (static top) */}
            <svg className="absolute left-1/2 -top-24 -translate-x-1/2 w-8 h-32 pointer-events-none opacity-50" viewBox="0 0 20 100" fill="none">
              <path d="M10 0 Q15 50 10 100" stroke="#333" strokeWidth="2" fill="none" />
            </svg>

            {/* Pendulum Wrapper */}
            <div className="relative mt-8 origin-top" style={{ animation: 'pendulum 3s ease-in-out infinite alternate', transformOrigin: 'top center' }}>
              
              {/* Clip */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-7 bg-gradient-to-b from-gray-500 to-gray-800 rounded-sm z-10 border border-gray-900 flex flex-col items-center">
                 <div className="w-2 h-2 rounded-full bg-gray-900 mt-4" />
              </div>

              {/* ID Card */}
              <div className="relative w-full bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden group flex flex-col">
                {/* Holographic Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none transition-transform duration-1000 z-10" />
                
                {/* Main Body */}
                <div className="p-6 pb-4">
                  {/* Hole punch for clip */}
                  <div className="w-12 h-2 border border-white/10 rounded-full mx-auto mb-5 bg-black shadow-inner" />

                  {/* University Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/30">
                      {/* University/Education Icon */}
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                      </svg>
                    </div>
                    <div className="text-left font-jetbrains">
                      <p className="text-white text-sm font-bold tracking-wider leading-tight">MEDICAPS UNIV</p>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mt-0.5">Computer Science</p>
                    </div>
                  </div>

                  {/* Photo */}
                  <div className="w-32 h-32 mx-auto rounded-xl bg-gradient-to-br from-red-500/10 to-red-900/30 border-2 border-red-500/40 mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-red-500 transition-colors duration-500 shadow-[0_0_15px_rgba(239,68,68,0.2)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                     <img src={myPhoto} alt="Ansh Malviya" className="w-full h-full object-cover" />
                  </div>

                  {/* Name & Role */}
                  <div className="text-center font-jetbrains space-y-1 mb-6">
                    <h3 className="text-[22px] font-bold text-white tracking-widest uppercase">ANSH PARASHAR</h3>
                    <p className="text-red-500 text-sm font-medium tracking-wider">Full-Stack Dev</p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-white/10 mb-4" />

                  {/* Details List */}
                  <div className="space-y-3 font-jetbrains">
                    <div className="flex items-center gap-4 text-gray-400">
                      <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="w-[1px] h-4 bg-white/10" />
                      <span className="text-gray-300 text-[13px] tracking-wider uppercase font-medium">B.Tech CSE</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="w-[1px] h-4 bg-white/10" />
                      <span className="text-gray-300 text-[13px] tracking-wider uppercase font-medium">2024-2028</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                      <svg className="w-[18px] h-[18px] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="w-[1px] h-4 bg-white/10" />
                      <span className="text-gray-300 text-[13px] tracking-wider uppercase font-medium">Indore, IN</span>
                    </div>
                  </div>
                </div>

                {/* Dark Footer Strip */}
                <div className="w-full bg-white/[0.03] border-t border-white/10 p-4 font-jetbrains flex flex-col items-center">
                  <div className="w-full flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-sm" />
                      <span className="text-xs text-red-500 font-bold tracking-widest">ID</span>
                    </div>
                    <span className="text-xs text-gray-400 tracking-widest font-bold">0824-817-A</span>
                  </div>
                  
                  {/* Fake Barcode */}
                  <div className="flex justify-between w-full h-8 opacity-70 mb-3">
                     {[...Array(32)].map((_, i) => (
                       <div key={i} className={`bg-white rounded-sm ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-40'}`} style={{ width: Math.random() * 3 + 1 + 'px' }} />
                     ))}
                  </div>

                  <div className="w-full text-center">
                    <span className="text-[10px] text-gray-600 tracking-[0.2em] font-bold">VALID · 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Global styles for animations */}
      <style>{`
        @keyframes pendulum {
          0% { transform: rotate(-4deg); }
          100% { transform: rotate(4deg); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default About;