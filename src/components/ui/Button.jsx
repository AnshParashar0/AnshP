import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50 font-jetbrains';
  
  const variants = {
    primary: 'bg-gradient-to-r from-red-600 to-red-500 text-black hover:from-red-500 hover:to-red-400 shadow-neon-red hover:shadow-neon',
    secondary: 'glass-effect text-red-400 hover:bg-red-500/10 border border-red-500/30 hover:border-red-500/50',
    outline: 'border border-red-500 text-red-500 hover:bg-red-500/10 hover:text-red-400',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={classes} {...props}>
      {buttonContent}
    </button>
  );
};

export default Button;
