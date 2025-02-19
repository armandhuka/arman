import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Portfolio Websites",
      description: [
        "🎬 Video Editing Portfolio",
        "🎨 Graphic Design Portfolio",
        "💻 Web Development Portfolio",
        "📸 Photography Portfolio",
        "✍️ Writing Portfolio",
      ],
      icon: "📁",
    },
    {
      title: "Landing Pages",
      description: [
        "🏢 Business Landing Page",
        "🛍️ Product Landing Page",
        "🎉 Event Landing Page",
        "🛠️ Service Landing Page",
        "💡 SaaS Landing Page",
      ],
      icon: "📄",
    },
    {
      title: "Multiple Web Pages",
      description: [
        "🏛️ Corporate Website",
        "📝 Blog Website",
        "🛒 E-commerce Website",
        "📚 Educational Website",
        "👤 Personal Website",
      ],
      icon: "🌍",
    },
  ];

  return (
    <motion.div
      id="service"
      className="py-16"
      style={{ backgroundColor: "var(--box-bg)" }}
      initial={{ opacity: 0, y: 50 }} // Start hidden and lower
      animate={{ opacity: 1, y: 0 }} // Fade in & move up
      transition={{ duration: 0.8 }} // Smooth animation
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: "var(--text)" }}
        >
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ backgroundColor: "var(--background)" }}
              initial={{ opacity: 0, y: 30 }} // Start hidden and lower
              animate={{ opacity: 1, y: 0 }} // Fade in & move up
              transition={{ duration: 0.6, delay: index * 0.2 }} // Delay for smooth effect
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
                {service.icon} {service.title}
              </h3>
              <ul className="space-y-2">
                {service.description.map((item, idx) => (
                  <li key={idx} style={{ color: "var(--text)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
