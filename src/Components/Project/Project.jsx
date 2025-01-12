// src/components/ProjectSection.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection = ({id}) => {
  return (
    <div id={id} className="h-auto py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="NoteCraft"
            description="A simple note-taking app built using HTML, CSS, and JavaScript, allowing users to create, manage, and delete notes with local storage support for persistent data."
            link="https://github.com/armandhuka/NoteCraft"
          />
          <ProjectCard
            title="Colory "
            description=" A color palette generator built with HTML, CSS, and JavaScript, enabling users to create, save, and copy custom color schemes for design projects."
            link="https://github.com/armandhuka/Colory"
          />
          <ProjectCard
            title="Resume Builder"
            description="A dynamic resume builder created using HTML, CSS, and JavaScript (React js) that helps users easily generate professional resumes by filling in personal and career details."
            link="https://github.com/armandhuka/resume-duilder"
          />
          <ProjectCard
            title="E-Commerce Cart "
            description="A responsive e-commerce cart application built with HTML, CSS, and JavaScript. It allows users to add, update, and remove items from the cart dynamically."
            link="https://github.com/armandhuka/e-commerce-cart"
          />
          <ProjectCard
            title="AI-Powered Chatbot"
            description=" An interactive chatbot built using HTML, CSS, and React js, featuring AI-powered responses to user queries, offering a seamless and engaging conversational experience."
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
