import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  glass = false,
  ...props 
}) => {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300 font-jetbrains';
  
  const variantClasses = glass 
    ? 'glass-effect'
    : 'bg-black border border-green-500/20';
  
  const hoverClasses = hover 
    ? 'hover-scale hover-glow hover:border-green-500/50'
    : '';
  
  const classes = `${baseClasses} ${variantClasses} ${hoverClasses} ${className}`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={classes}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
