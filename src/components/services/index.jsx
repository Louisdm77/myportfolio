import React from "react";
import { DiResponsive } from "react-icons/di";
import { IoAppsSharp } from "react-icons/io5";
import { FaGlobe, FaCode, FaShoppingCart } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Services = () => {
  const services = [
    {
      service: "Responsive Design",
      icon: <DiResponsive />,
      description: "Designs that adapt to various screen sizes.",
    },
    {
      service: "Single Page Apps",
      icon: <IoAppsSharp />,
      description: "Dynamic apps for a smooth user experience.",
    },
    {
      service: "Web Development",
      icon: <FaGlobe />,
      description: "Tailored websites for specific needs.",
    },
    {
      service: "API Integration",
      icon: <FaCode />,
      description: "Connecting third-party services for functionality.",
    },
    {
      service: "E-commerce",
      icon: <FaShoppingCart />,
      description: "Online stores with secure payment systems.",
    },
    {
      service: "Firebase Setup",
      icon: <SiFirebase />,
      description: "Real-time data and backend services.",
    },
  ];
  return (
    <div id="services">
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="text-center bg-gray-900 rounded-xl lg:p-8 lg:h-auto shadow-lg transition-transform transform hover:scale-105"
            >
              <p className="flex justify-center text-3xl p-2 role">
                {service.icon}
              </p>
              <p className="text-xl font-bold mb-2 role">{service.service}</p>
              <p className="text-gray-400">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
