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
        "etc..."
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
        "etc..."
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
        "etc..."
      ],
      icon: "🌍",
    },
  ];

  return (
    <section
      id="service"
      className="py-20 px-4 sm:px-6 lg:px-16"
      style={{ backgroundColor: "var(--box-bg)" }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-16 tracking-wide"
        style={{ color: "var(--text)" }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What I Can Do For You ✨
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="border rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02]"
            style={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>

            <h3 className="text-2xl font-semibold mb-6 group-hover:text-purple-500 transition-colors duration-300">
              {service.title}
            </h3>

            <ul className="space-y-3">
              {service.description.map((item, idx) => (
                <li
                  key={idx}
                  className="transition duration-200"
                  style={{ color: "var(--text)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
