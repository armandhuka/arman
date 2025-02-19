import React from "react";
import { FaCode, FaUserTie, FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const skillsData = [
  {
    id: "education",
    title: "Education",
    icon: <FaGraduationCap className="text-4xl text-yellow-500" />,
    details: [
      { year: "2022", degree: "10th Grade", school: "Madinatul Ilm Karnala Para School" },
      { year: "2024", degree: "12th Grade (Commerce)", school: "Madinatul Ilm Karnala Para School" },
    ],
  },
  {
    id: "webSkills",
    title: "Web Development",
    icon: <FaCode className="text-4xl text-blue-500" />,
    items: ["HTML, CSS, JavaScript", "React.js & Tailwind CSS", "Redux Toolkit", "WordPress Development"],
  },
  {
    id: "otherSkills",
    title: "Other Skills",
    icon: <FaLightbulb className="text-4xl text-green-500" />,
    items: ["AI & Automation", "Video Editing", "Photo Editing", "UI/UX Design"],
  },
  {
    id: "communication",
    title: "Work & Communication",
    icon: <FaUserTie className="text-4xl text-red-500" />,
    items: ["Team Collaboration", "Client Handling", "Problem Solving", "Leadership"],
  },
];

const Skills = () => {
  return (
    <div className="py-16 px-6 bg-[var(--background)] text-[var(--text)]">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 
            transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative"
        >
          <div className="absolute top-3 right-3 opacity-50">{skillsData[0].icon}</div>
          <h3 className="text-2xl font-bold mb-4">{skillsData[0].title}</h3>
          <div className="space-y-4">
            {skillsData[0].details.map((edu, i) => (
              <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/20 shadow-md">
                <p className="text-lg font-semibold">{edu.degree}</p>
                <p className="text-sm text-gray-400">{edu.school}</p>
                <p className="text-xs text-gray-400">{edu.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Web Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 
            transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative"
        >
          <div className="absolute top-3 right-3 opacity-50">{skillsData[1].icon}</div>
          <h3 className="text-2xl font-bold mb-4">{skillsData[1].title}</h3>
          <ul className="space-y-2 text-sm">
            {skillsData[1].items.map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <span>✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Other Skills */}
        {skillsData.slice(2).map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20 
              transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative"
          >
            <div className="absolute top-3 right-3 opacity-50">{skill.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
            <ul className="space-y-2 text-sm">
              {skill.items.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <span>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
