import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { Typewriter } from 'react-simple-typewriter';

const BannerPage = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://in.linkedin.com/in/arman-dhuka-2b58b2270?original_referer=https%3A%2F%2Fwww.google.com%2F',
    },
    {
      icon: <FaTwitter />,
      url: 'https://x.com/DhukaArman?t=1xy4SLQiyLWhYshe3pYo-A&s=09',
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/armandhuka/',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Arman Dhuka - Web Developer Portfolio</title>
        <meta name="description" content="Arman Dhuka's portfolio website showcasing web development projects and skills." />
        <meta name="keywords" content="Arman Dhuka, Web Developer, React Developer, Portfolio, Frontend Developer" />
        <meta name="author" content="Arman Dhuka" />
        <meta property="og:title" content="Arman Dhuka - Web Developer Portfolio" />
        <meta property="og:description" content="Explore projects and skills of Arman Dhuka, a frontend web developer." />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="QWhIDZyI_zV5R4ZV8RbQGvcXQE0hwraHgcV1MWbNOX0" />
      </Helmet>

      {/* Social Media Icons */}
      <motion.div
        className="absolute left-4 top-4 z-10 flex flex-row space-x-4 md:left-8 lg:left-12 md:flex-col md:space-x-0 md:space-y-4 md:top-1/4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {socialLinks.map(({ icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-400 hover:text-blue-500 transition-colors duration-300 md:text-4xl lg:text-5xl"
          >
            {icon}
          </a>
        ))}
      </motion.div>

      {/* Center Content */}
      <motion.div
        className="text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h1
          className="text-5xl font-extrabold mb-8 md:text-5xl lg:text-6xl"
          style={{ color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Hi, I'm Arman
        </motion.h1>

        <motion.p
          className="text-2/5xl mb-4 md:text-xl"
          style={{ color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Crafting innovative solutions as a freelance developer.
        </motion.p>

        {/* Typewriter Effect */}
        <motion.p
          className="text-2xl mb-12 md:text-xl font-semibold text-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Typewriter
            words={['freelancer', 'web developer' , "AI Enthusiast" , "Tech Explorer" ,"Self Learner"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a href="https://github.com/armandhuka/">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all duration-300 md:px-8 md:py-3">
              View Projects
            </button>
          </a>
          <a href="https://in.linkedin.com/in/arman-dhuka-2b58b2270?original_referer=https%3A%2F%2Fwww.google.com%2F">
            <button
              className="border-2 border-purple-600 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-lg transition-all duration-300"
              style={{ color: 'var(--text)' }}
            >
              Let's Connect
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BannerPage;
