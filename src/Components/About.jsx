import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutPage = ({ id }) => {
    return (
        <div id={id} className="h-auto py-16" style={{ backgroundColor: 'var(--background)' }}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center"
                >
                    <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--text)' }}>
                        About Me
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
                        I'm a passionate developer with expertise in building modern web applications.
                        My focus is on creating clean, efficient, and user-friendly solutions that
                        solve real-world problems. I enjoy working with cutting-edge technologies and
                        continuously learning to improve my skills.
                    </p>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
                >
                    {/* Example Skill Card */}
                    <div className="bg-transparent border-[2px] border-blue-700 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold mb-2 text-blue-400">Web Development</h3>
                        <ul className="text-gray-300">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>

                    {/* Add more skill cards here */}
                    <div className="bg-transparent border-[2px] border-blue-700 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold mb-2 text-blue-400">UI/UX Design</h3>
                        <ul className="text-gray-300">
                            <li>Figma</li>
                            <li>Adobe XD</li>
                            <li>User Research</li>
                        </ul>
                    </div>

                    <div className="bg-transparent border-[2px] border-blue-700 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold mb-2 text-blue-400">Other Skills</h3>
                        <ul className="text-gray-300">
                            <li>Communication</li>
                            <li>Problem Solving</li>
                            <li>Teamwork</li>
                        </ul>
                    </div>

                    <div className="bg-transparent border-[2px] border-blue-700 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold mb-2 text-blue-400">Backend Development</h3>
                        <ul className="text-gray-300">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>

                    {/* ... */}
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;