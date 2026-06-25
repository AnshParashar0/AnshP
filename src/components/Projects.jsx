import React from 'react';
import ProjectCarousel from './carousel/ProjectCarousel';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black">
      <h2 className="sr-only">A circular carousel of project cards that rotates as you scroll</h2>
      <ProjectCarousel projects={projects} />
    </section>
  );
};

export default Projects;
