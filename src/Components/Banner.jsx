import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const BannerPage = () => {
  return (
    <section
      id='home'
      className="min-h-screen flex items-center justify-center relative"
    >
      {/* Social Media Icons (Mobile Responsive) */}
      <motion.div
        className="absolute left-4 top-1/4 z-10 flex flex-col space-y-4 md:left-8 lg:left-12" // Adjusted left positions for responsiveness
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-gray-400 hover:text-blue-500 transition-colors duration-300 md:text-4xl lg:text-5xl" /> {/* Increased icon size on larger screens */}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-3xl text-gray-400 hover:text-blue-500 transition-colors duration-300 md:text-4xl lg:text-5xl" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-400 hover:text-blue-500 transition-colors duration-300 md:text-4xl lg:text-5xl" />
        </a>
      </motion.div>

      {/* Content (Center) */}
      <div className="text-center">
        <motion.h1
          className="text-4xl font-bold mb-8 transition-colors duration-300 md:text-5xl lg:text-6xl" // Adjusted text sizes for responsiveness
          style={{ color: 'var(--text)' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Arman
        </motion.h1>
        <motion.p
          className="text-lg mb-12 transition-colors duration-300 md:text-xl" // Adjusted text size for responsiveness
          style={{ color: 'var(--text)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A freelance developer crafting innovative solutions and seeking exciting opportunities.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300 md:px-8 md:py-3">
            View Projects
          </button>
          <button
            className="border-2 border-purple-600 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-lg transition-all duration-300 transition-colors duration-300"
            style={{ color: 'var(--text)' }}
          >
            Let's Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerPage;