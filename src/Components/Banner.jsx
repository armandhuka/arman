import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const BannerPage = () => {
  return (
    <section
      id='home'
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Social Media Icons (Mobile Responsive) */}
      <motion.div
        className="absolute left-4 top-4 z-10 flex flex-row space-x-4 md:left-8 lg:left-12 md:flex-col md:space-x-0 md:space-y-4 md:top-1/4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
       <a href="https://in.linkedin.com/in/arman-dhuka-2b58b2270?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" rel="noopener noreferrer">
  <FaLinkedin className="text-3xl text-gray-400 hover:text-blue-500 transition-colors duration-300 md:text-4xl lg:text-5xl" />
</a>

<a href="https://x.com/DhukaArman?t=1xy4SLQiyLWhYshe3pYo-A&s=09" target="_blank" rel="noopener noreferrer">
  <FaTwitter className="text-3xl text-gray-400 hover:text-blue-500 transition-colors duration-300 md:text-4xl lg:text-5xl" />
</a>

<a href="https://github.com/armandhuka/" target="_blank" rel="noopener noreferrer">
  <FaGithub className="text-3xl text-gray-400 hover:text-blue-500 transition-colors duration-300 md:text-4xl lg:text-5xl" />
</a>

      </motion.div>

      {/* Content (Center) */}
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 50 }} // Start from the bottom
        animate={{ opacity: 1, y: 0 }} // Move to the center
        transition={{ duration: 0.8, delay: 0.4 }} // Smooth transition with delay
      >
        <motion.h1
          className="text-4xl font-bold mb-8 md:text-5xl lg:text-6xl"
          style={{ color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }} // Fade in and slide up
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }} // Slight delay for sequential effect
        >
          Hi, I'm Arman
        </motion.h1>
        <motion.p
          className="text-lg mb-12 md:text-xl"
          style={{ color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }} // Fade in and slide up
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }} // Slight delay for sequential effect
        >
          Crafting innovative solutions as a freelance developer.
        </motion.p>
        <motion.div
          className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center"
          initial={{ opacity: 0, y: 20 }} // Fade in and slide up
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }} // Slight delay for sequential effect
        >
          <a href="https://github.com/armandhuka/">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300 md:px-8 md:py-3">
             View Projects
           </button>
         </a>

        <a href="https://in.linkedin.com/in/arman-dhuka-2b58b2270?original_referer=https%3A%2F%2Fwww.google.com%2F">
           <button className="border-2 border-purple-600 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-lg transition-all duration-300" style={{ color: 'var(--text)' }}>
              Let's Connect
           </button>
        </a>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default BannerPage;