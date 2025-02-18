import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContext";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"; // Import icons

const ContactPage = ({ id }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.div
      id={id}
      className={`text-white max-h-screen flex flex-col justify-between overflow-x-hidden relative ${theme === 'dark' ? 'dark-mode' : ''}`} // Apply theme class
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Social Media Icons (Right Side) */}
      <motion.div
        className="absolute right-8 top-1/4 flex flex-col space-y-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl text-gray-400 hover:text-blue-500 transition-colors duration-300" /> {/* Increased icon size */}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-4xl text-gray-400 hover:text-blue-500 transition-colors duration-300" /> {/* Increased icon size */}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl text-gray-400 hover:text-blue-500 transition-colors duration-300" /> {/* Increased icon size */}
        </a>
      </motion.div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center p-8 space-y-10 lg:space-y-0 lg:space-x-10 max-w-full mx-auto mt-20">
        {/* Left Column - Contact Information */}
        <motion.div
          className="flex-1 space-y-6 lg:w-1/2 px-4 sm:px-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-5xl font-extrabold bg-clip-text text-center lg:text-left" style={{ color: 'var(--text)' }}>
            Get in Touch
          </h2>
          <p className="text-lg text-center lg:text-left max-w-2xl mx-auto mt-4 mb-8"
          style={{ color: 'var(--text)' }}>
            Feel free to reach out to me through any of the methods below. I'm
            always happy to connect!
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center justify-start space-x-4">
              <FaEnvelope className="text-blue-400 text-xl" />
              <a
                href="mailto:dhukaarmanumar@example.com"
                className="text-blue-400 hover:text-blue-500 font-medium transition duration-300"
              >
                dhukaarmanumar@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-start space-x-4">
              <FaPhone className="text-blue-400 text-xl" />
              <span className="text-blue-400">+91 9265350694</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Empty Space for Layout Balance */}
        <div className="flex-1 hidden lg:block"></div>
      </div>

      {/* Footer with Theme Toggle */}
      <motion.footer
        className="p-6 text-center text-white mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-sm" style={{ color: 'var(--text)' }}>
          &copy; {new Date().getFullYear()} Arman. All Rights Reserved.
        </p>
      </motion.footer>
    </motion.div>
  );
};

export default ContactPage;