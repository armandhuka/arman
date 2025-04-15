import React from "react";
import Skills from "./Skills"; // Import Skills Component
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 tracking-wide"
          style={{ color: "var(--text)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🚀 Meet the Mind Behind the Code
        </motion.h2>
        
        <motion.p
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="text-lg text-gray-700 dark:text-gray-100 text-center mb-6"
        >
          I am Arman Dhuka, a passionate web developer with experience in frontend technologies.
          I build interactive websites and love experimenting with new technologies.
        </motion.p>


      {/* Skills Section */}
      <Skills />
    </section>
  );
};

export default About;
