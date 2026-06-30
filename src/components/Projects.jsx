import React from 'react';
import ProjectCarousel from './carousel/ProjectCarousel';
import MobileProjectCarousel from './carousel/MobileProjectCarousel';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black">
      <h2 className="sr-only">A circular carousel of project cards that rotates as you scroll</h2>
      
      {/* Desktop view */}
      <div className="hidden lg:block">
        <ProjectCarousel projects={projects} />
      </div>

      {/* Mobile view */}
      <div className="block lg:hidden">
        <MobileProjectCarousel projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
