import React from 'react';

const AboutPage = ({id}) => {
  return (
    <div id={id} className="min-h-screen flex flex-col items-center bg-transparent p-8">
      {/* About Me Heading */}
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center">
        About Me
      </div>

      {/* Description */}
      <div className="text-lg text-gray-300 mb-16 text-center max-w-4xl leading-relaxed">
        Hi, I'm <span className="text-blue-400 font-bold">Arman Dhuka</span>, a passionate web developer with a strong love for building innovative and user-friendly applications. I thrive on tackling new challenges and am always looking for opportunities to grow and evolve as a developer. As a quick learner and a dedicated team player, I bring creativity and problem-solving skills to every project I work on. Alongside traditional development techniques, I leverage AI technologies to enhance my coding process, making my work more efficient and cutting-edge. I'm excited to share my skills, experience, and the innovative solutions I can bring to your projects.
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        
        {/* Education Section (Card) */}
        <div className="bg-transparent border-[2px] border-blue-700 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl col-span-1">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Education</h2>
          <div className="flex flex-col gap-4 text-gray-300">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full text-white">
                <i className="fas fa-graduation-cap text-lg"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">10th Standard</h3>
                <p>MIK (2021-2022) - 75%</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full text-white">
                <i className="fas fa-graduation-cap text-lg"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold">12th Standard</h3>
                <p>MIK (2014-2025) - 85%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section (Card) */}
        <div className="bg-transparent border-[2px] border-blue-700 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Web Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Frontend Skill Card */}
            <div className="bg-transparent p-4 rounded-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Frontend</h3>
              <ul className="text-gray-300">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            {/* Backend Skill Card */}
            <div className="bg-transparent  p-4 rounded-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Backend</h3>
              <div className="text-gray-300">Coming Soon</div>
            </div>
            {/* Database Skill Card */}
            <div className="bg-transparent  p-4 rounded-lg transition-all duration-300 ">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Database</h3>
              <div className="text-gray-300">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Skills Section */}
      <div className="bg-transparent border-[2px] border-blue-700 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full max-w-6xl mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Design Skills Card */}
          <div className=" p-4 rounded-lg transition-all duration-300 ">
            <h3 className="text-xl font-semibold mb-2 text-green-400">Other Skills</h3>
            <ul className="list-disc pl-4 text-gray-300">
              <li>Video Editing</li>
              <li>Graphic design</li>
              <li>Ai</li>
            </ul>
          </div>
          {/* Communication Skills Card */}
          <div className=" p-4 rounded-lg transition-all duration-300 ">
            <h3 className="text-xl font-semibold mb-2 text-green-400">Communication Skills</h3>
            <ul className="list-disc pl-4 text-gray-300">
              <li>Written Communication</li>
              <li>Verbal Communication</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
