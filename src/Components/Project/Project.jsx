import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import ThemeContext from "../../Context/ThemeContext";
import { motion } from "framer-motion";

const ProjectSection = ({ id }) => {
  const { theme } = useContext(ThemeContext);

  // You can define animation config here
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      title: "NoteCraft",
      description:
        "A simple note-taking app built using HTML, CSS, and JavaScript, allowing users to create, manage, and delete notes with local storage support for persistent data.",
      link: "https://github.com/armandhuka/NoteCraft",
    },
    {
      title: "Colory",
      description:
        "A color palette generator built with HTML, CSS, and JavaScript, enabling users to create, save, and copy custom color schemes for design projects.",
      link: "https://github.com/armandhuka/Colory",
    },
    {
      title: "Resume Builder",
      description:
        "A dynamic resume builder created using HTML, CSS, and React js that helps users easily generate professional resumes by filling in personal and career details.",
      link: "https://github.com/armandhuka/resume-duilder",
    },
    {
      title: "E-Commerce Cart",
      description:
        "A responsive e-commerce cart application built with HTML, CSS, and JavaScript. It allows users to add, update, and remove items from the cart dynamically.",
      link: "https://github.com/armandhuka/e-commerce-cart",
    },
    {
      title: "AI-Powered Chatbot",
      description:
        "An interactive chatbot built using HTML, CSS, and React js, featuring AI-powered responses to user queries, offering a seamless and engaging conversational experience.",
      link: "https://github.com/armandhuka/AI-Powered-Chatbot",
    },
    {
      title: "E-Commerce Website",
      description:
        "A dynamic e-commerce platform built with HTML, CSS, and JavaScript, showcasing products with a modern design, intuitive navigation, and a user-friendly interface for online shopping.",
      link: "https://github.com/armandhuka/e-commerce-website",
    },
  ];

  return (
    <div id={id} className="h-auto py-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16 tracking-wide"
          style={{ color: "var(--text)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Turning Ideas into Interfaces 🛠️
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
