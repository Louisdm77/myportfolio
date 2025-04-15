import React from "react";
import { motion } from "framer-motion";
import { DiResponsive } from "react-icons/di";
import { IoAppsSharp } from "react-icons/io5";
import { FaGlobe, FaCode, FaShoppingCart } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Services = () => {
  const services = [
    { service: "Responsive Design", icon: <DiResponsive />, description: "Designs that adapt to various screen sizes." },
    { service: "Single Page Apps", icon: <IoAppsSharp />, description: "Dynamic apps for a smooth user experience." },
    { service: "Web Development", icon: <FaGlobe />, description: "Tailored websites for specific needs." },
    { service: "API Integration", icon: <FaCode />, description: "Connecting third-party services for functionality." },
    { service: "E-commerce", icon: <FaShoppingCart />, description: "Online stores with secure payment systems." },
    { service: "Firebase Setup", icon: <SiFirebase />, description: "Real-time data and backend services." },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ rotate: index % 2 === 0 ? 3 : -3 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-900 rounded-2xl p-8 shadow-xl border-t-4 border-teal-500"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="text-5xl text-teal-500 mb-6 flex justify-center"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-center">{service.service}</h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;