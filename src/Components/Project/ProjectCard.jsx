import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, link }) => {
  return (
    <motion.div
      className="relative rounded-2xl p-6 shadow-lg transition-all duration-300 border box overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.03, y: -2,  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }} // Added hover effect
    >
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2 transition-transform duration-300 group-hover:translate-x-2">
          {title}
        </h3>
        <p className="text-sm">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 bg-purple-600 hover:bg-purple-500 text-white"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;