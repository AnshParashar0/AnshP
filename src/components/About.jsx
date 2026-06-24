import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> with 
                over 5 years of experience building scalable web applications. I specialize in creating 
                elegant solutions to complex problems and turning ideas into reality through clean, 
                efficient code.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech started with a curiosity about how things work on the internet, 
                and has evolved into a career focused on building exceptional digital experiences. 
                I'm particularly interested in performance optimization, user experience design, 
                and emerging technologies.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical writing and mentoring. 
                I believe in continuous learning and staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '5+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual Card */}
          <motion.div variants={itemVariants} className="relative">
            <Card className="relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 group-hover:from-purple-600/30 group-hover:to-indigo-600/30 transition-all duration-500" />
              
              {/* Placeholder for image */}
              <div className="relative z-10 flex items-center justify-center h-64 sm:h-80">
                <div className="text-center space-y-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center"
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </motion.div>
                  <div className="text-gray-300">
                    <div className="font-semibold text-lg">Developer & Designer</div>
                    <div className="text-sm text-gray-400">Creating Digital Excellence</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-purple-500/20 rounded-full animate-float" />
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-indigo-500/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 right-8 w-4 h-4 bg-pink-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
