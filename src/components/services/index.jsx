import React from "react";
import { motion } from "framer-motion";
import { DiResponsive } from "react-icons/di";
import { IoAppsSharp } from "react-icons/io5";
import { FaGlobe,FaRocket,  FaCode, FaShoppingCart } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      service: "Mobile-Friendly Websites",
      icon: <DiResponsive />,
      description:
        "Websites that look great and work flawlessly on any device—turning visitors into customers.",
    },
    {
      service: "High-Speed Single Page Apps",
      icon: <IoAppsSharp />,
      description:
        "Fast, interactive web apps that keep users engaged and boost retention.",
    },
    {
      service: "Custom Web Development",
      icon: <FaGlobe />,
      description:
        "Tailored websites that align with your brand and business goals.",
    },
    {
      service: "Smart API Integrations",
      icon: <FaCode />,
      description:
        "Connect your site to tools like payment gateways, CRMs, or booking systems for full functionality.",
    },
    {
      service: "E-commerce Solutions",
      icon: <FaShoppingCart />,
      description:
        "Launch an online store with secure checkout and conversion-driven design.",
    },
    {
      service: "Performance Optimization",
      icon: <FaRocket />,
      description:
        "Speed and SEO tuning to help your site rank higher and load faster, improving sales and user experience.",
    },
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
              <h3 className="text-2xl font-semibold mb-4 text-center">
                {service.service}
              </h3>
              <p className="text-gray-400 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
