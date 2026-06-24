import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLeetcode } from 'react-icons/si';
import achievementsImg from '../assets/image.png';

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-jetbrains">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-center justify-center w-full">
          {/* Left Column: Image in styled container with red border and red shadow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full max-w-[800px] rounded-3xl overflow-hidden border border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.3)] relative group bg-gray-900/10"
          >
            <img 
              src={achievementsImg} 
              alt="Achievements" 
              className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-103" 
              draggable={false}
            />
            {/* Ambient inner red gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Column: Achievements List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start justify-center w-full"
          >
            <p className="text-red-500/50 text-xs sm:text-sm font-jetbrains tracking-[0.25em] uppercase mb-8">
              Certifications & Platforms
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full max-w-md">
              {[
                { label: 'GitHub Profile', icon: SiGithub, sub: 'Open-source contributions', url: 'https://github.com/AnshParashar0' },
                { label: 'LeetCode Profile', icon: SiLeetcode, sub: 'Data structures & algorithms', url: 'https://leetcode.com/u/anshparashar4/' },
              ].map(({ label, icon: Icon, sub, url }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-5 p-6 rounded-2xl border border-gray-800 bg-gray-900/20 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300 cursor-pointer block"
                >
                  <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/20">
                    <Icon className="text-2xl text-red-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-base font-jetbrains font-semibold">{label}</span>
                    <span className="text-gray-500 text-xs mt-1 font-jetbrains">{sub}</span>
                  </div>
                </motion.a>
              ))}

              {/* Coursera Certificate Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full rounded-2xl border border-gray-800 bg-gray-900/20 overflow-hidden group hover:border-red-500/30 transition-all duration-300 relative h-48"
              >
                {/* Background Image from Coursera */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundImage: `url('https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~6KFB5HJ3OTHZ/CERTIFICATE_LANDING_PAGE~6KFB5HJ3OTHZ.jpeg')` }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-red-950/60 border border-red-500/30 text-red-400 font-jetbrains">
                      Certification
                    </span>
                  </div>

                  <div>
                    <h4 className="text-white text-base font-bold font-jetbrains tracking-tight">
                      AI For Everyone
                    </h4>
                    <p className="text-gray-400 text-xs mt-1 font-jetbrains">
                      DeepLearning.AI (Coursera Verified)
                    </p>
                    <div className="mt-3">
                      <a 
                        href="https://coursera.org/share/486f2874a1c984868a91fa471b726a17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-700 transition-colors font-jetbrains"
                      >
                        Open Certificate
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
