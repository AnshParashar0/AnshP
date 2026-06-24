import React from 'react';
import { motion } from 'framer-motion';
import ProjectCarousel from './carousel/ProjectCarousel';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="relative">
      {/* Section Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full" />
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-jetbrains">
              A selection of my recent work showcasing my skills in full-stack development, 
              modern frameworks, and creative problem-solving.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Circular Carousel */}
      <h2 className="sr-only">A circular carousel of project cards that rotates as you scroll</h2>
      <ProjectCarousel projects={projects} />
    </section>
  );
};

export default Projects;
