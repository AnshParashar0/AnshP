import React from 'react';
import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';
import { socialLinks, navItems } from '../data';

const Footer = () => {
  const getIcon = (iconName) => {
    const IconComponent = SiIcons[iconName] || FaIcons[iconName];
    return IconComponent ? <IconComponent /> : null;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio.dev</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate full-stack developer creating exceptional digital experiences 
              with modern technologies and clean code practices.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-3 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  {getIcon(social.icon)}
                </motion.a>
              ))}
            </div>
            <div className="text-gray-400 text-sm flex flex-col items-center md:items-end">
              <a href="mailto:parasharansh445@gmail.com" className="hover:text-purple-400 transition-colors">parasharansh445@gmail.com</a>
              <a href="tel:8989239542" className="hover:text-purple-400 transition-colors mt-1">8989239541</a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with</span>
              <div className="flex items-center space-x-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-red-500"
                >
                  ❤️
                </motion.span>
                <span>using React & Tailwind CSS</span>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
            >
              <span>Back to top</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient border */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 animate-gradient" />
    </footer>
  );
};

export default Footer;
