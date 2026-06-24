import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollProgress > 0 ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-red-600 to-red-500 shadow-neon-red"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  );
};

export default ScrollProgress;
