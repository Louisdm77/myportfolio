import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import electro from "../../assets/images/electropro.png";
import lux from "../../assets/images/luxwears.png";
import build from "../../assets/images/foodies.png";
import paw from "../../assets/images/pet.png";
import { FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import plumb from "../../assets/images/iita.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "ElectroPro",
      description: "A stylish website that highlights artistic works.",
      image: electro,
      link: "https://electro-pro.vercel.app/",
      tech: ["css", "tailwind", "javascript", "react"],
    },
    {
      id: 7,
      title: "IITA Golf Club",
      description: "A fully responsive plumbing store with booking feature.",
      image: plumb,
      link: "https://iitagolf.vercel.app/",
      tech: ["css", "tailwind", "javascript", "react"],
    },
    {
      id: 2,
      title: "LuxWears",
      description: "An elegant landing page designed for a fashion agency.",
      image: lux,
      link: "https://landing-seven-ruby.vercel.app/",
      tech: ["css", "tailwind", "javascript", "react"],
    },
    {
      id: 3,
      title: "Pawsome Pets",
      description: "A clean, responsive website for pet lovers.",
      image: paw,
      link: "https://pawsomepet.vercel.app/",
      tech: ["css", "tailwind", "javascript", "react"],
    },
    {
      id: 4,
      title: "Foodie Haven",
      description: "A user-friendly online food ordering platform.",
      image: build,
      link: "https://foodies-hub-chi.vercel.app/",
      tech: ["css", "tailwind", "javascript", "react"],
    },
  ];

  const techIcons = {
    css: <FaCss3Alt />,
    tailwind: <SiTailwindcss />,
    javascript: <FaJs />,
    react: <FaReact />,
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Portfolio
        </motion.h2>
        <Slider {...settings}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="px-2"
            >
              <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="relative w-full h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {project.description}
                  </p>
                  <div className="mt-3 flex space-x-3">
                    {project.tech.map((tech, idx) => (
                      <div key={idx} className="text-xl text-teal-500">
                        {techIcons[tech]}
                      </div>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-1 bg-teal-500 text-white text-sm font-semibold rounded-full hover:bg-teal-600 transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
