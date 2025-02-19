import React from "react";
import Skills from "./Skills"; // Import Skills Component

const About = () => {
  return (
    <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-100 text-center mb-6">
        I am Arman Dhuka, a passionate web developer with experience in frontend technologies.
        I build interactive websites and love experimenting with new technologies.
      </p>

      {/* Skills Section */}
      <Skills />
    </section>
  );
};

export default About;
