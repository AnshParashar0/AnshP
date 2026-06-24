import React from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLeetcode } from 'react-icons/si';

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center min-h-[40vh]"
        >
          <p className="text-gray-600 text-sm font-jetbrains tracking-widest uppercase mb-12">
            Coming soon
          </p>

          <div className="grid sm:grid-cols-2 gap-6 w-full max-w-lg">
            {[
              { label: 'GitHub', icon: SiGithub },
              { label: 'LeetCode', icon: SiLeetcode },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-8 rounded-2xl border border-gray-800/50 bg-gray-900/20 opacity-40"
              >
                <Icon className="text-3xl text-gray-500" />
                <span className="text-gray-500 text-sm font-jetbrains">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
