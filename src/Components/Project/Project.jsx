import React, { useContext } from "react";
import ProjectCard from "./ProjectCard";
import ThemeContext from "../../Context/ThemeContext";

const ProjectSection = ({ id }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div id={id} className="h-auto py-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        {/* Theme Toggle Button */}
        {/* <div className="flex justify-end mb-6">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 
            border-2 border-gray-500 hover:border-purple-500
            bg-transparent hover:bg-purple-500 hover:text-white"
          >
            {theme === "dark" ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div> */}

        {/* Section Title */}
        <h2 className="text-5xl font-extrabold text-center mb-16 tracking-wide">
          My <span className="text-purple-400">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
            title="NoteCraft"
            description="A simple note-taking app built using HTML, CSS, and JavaScript, allowing users to create, manage, and delete notes with local storage support for persistent data."
            link="https://github.com/armandhuka/NoteCraft"
          />
          <ProjectCard
            title="Colory"
            description="A color palette generator built with HTML, CSS, and JavaScript, enabling users to create, save, and copy custom color schemes for design projects."
            link="https://github.com/armandhuka/Colory"
          />
          <ProjectCard
            title="Resume Builder"
            description="A dynamic resume builder created using HTML, CSS, and React js that helps users easily generate professional resumes by filling in personal and career details."
            link="https://github.com/armandhuka/resume-duilder"
          />
          <ProjectCard
            title="E-Commerce Cart"
            description="A responsive e-commerce cart application built with HTML, CSS, and JavaScript. It allows users to add, update, and remove items from the cart dynamically."
            link="https://github.com/armandhuka/e-commerce-cart"
          />
          <ProjectCard
            title="AI-Powered Chatbot"
            description="An interactive chatbot built using HTML, CSS, and React js, featuring AI-powered responses to user queries, offering a seamless and engaging conversational experience."
            link="https://github.com/armandhuka/AI-Powered-Chatbot"
          />
          <ProjectCard
            title="E-Commerce Website"
            description="A dynamic e-commerce platform built with HTML, CSS, and JavaScript, showcasing products with a modern design, intuitive navigation, and a user-friendly interface for online shopping."
            link="https://github.com/armandhuka/e-commerce-website"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
