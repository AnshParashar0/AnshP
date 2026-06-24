import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
