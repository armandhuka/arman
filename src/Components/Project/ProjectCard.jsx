// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="relative bg-transparent border-[2px] border-blue-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
      {/* Blur effect behind the card */}
      <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-sm rounded-lg"></div>
      
      {/* Card content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-green-400 mb-2">{title}</h3>
        <p className="text-lg text-white mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white font-bold py-2 px-4 rounded flex items-center transition duration-300"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2h-7m15 13l-3-3m0 0l-3 3m3-3V8a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
