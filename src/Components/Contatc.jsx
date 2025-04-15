import React, { useContext } from "react";
import { motion } from "framer-motion";
import ThemeContext from "../Context/ThemeContext";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import Footer from "./Footer";

const ContactPage = ({ id }) => {
  const { theme } = useContext(ThemeContext);

  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const contactBoxBg = theme === "dark" ? "bg-gray-600" : "bg-gray-100";
  const hoverEffect = theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200";

  return (
    <motion.div
      id={id}
      className={`flex flex-col justify-between`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 gap-8 md:gap-12">
        
        {/* Left Side - Contact Info */}
        <motion.div
          className="flex flex-col space-y-6 w-full md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className={`text-3xl sm:text-4xl font-extrabold ${textColor}`}>Let's Get in Touch</h2>

          {/* Email */}
          <motion.div
            className={`${contactBoxBg} p-5 rounded-lg shadow-lg flex items-center space-x-4 transition-all duration-300 ${hoverEffect} hover:scale-105 hover:shadow-2xl`}
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope className={`text-2xl sm:text-3xl ${textColor}`} />
            <a
              href="mailto:dhukaarmanumar@gmail.com"
              className={`text-base sm:text-lg font-medium ${textColor} hover:underline`}
            >
              dhukaarmanumar@gmail.com
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            className={`${contactBoxBg} p-5 rounded-lg shadow-lg flex items-center space-x-4 transition-all duration-300 ${hoverEffect} hover:scale-105 hover:shadow-2xl`}
            whileHover={{ scale: 1.05 }}
          >
            <FaPhone className={`text-2xl sm:text-3xl ${textColor}`} />
            <span className={`text-base sm:text-lg font-medium ${textColor}`}>+91 9265350694</span>
          </motion.div>
        </motion.div>

        {/* Right Side - Message + Socials */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={`text-2xl sm:text-3xl font-bold ${textColor}`}>Have a project in mind?</h3>
          <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Whether you want to collaborate, need a website, or just want to chat about tech – I'm here to help.  
            Feel free to reach out, and let’s create something amazing together!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            {[
              { icon: FaLinkedin, link: "https://in.linkedin.com/in/arman-dhuka-2b58b2270" },
              { icon: FaTwitter, link: "https://x.com/DhukaArman?t=1xy4SLQiyLWhYshe3pYo-A&s=09" },
              { icon: FaGithub, link: "https://github.com/armandhuka" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl sm:text-4xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} hover:text-blue-500 transition transform hover:scale-110`}
                whileHover={{ y: -5 }}
              >
                <item.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer with Scroll Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
