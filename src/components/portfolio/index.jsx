import React from "react";
import electro from "../../assets/images/electropro.png";
import lux from "../../assets/images/luxwears.png";
import build from "../../assets/images/buildmasters.png";
import { Link } from "react-router-dom";

// Load Font Awesome for icons (add this to your index.html if not already present)
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

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
      id: 2,
      title: "LuxWears",
      description: "An elegant landing page designed for a fashion agency.",
      image: lux,
      link: "https://landing-seven-ruby.vercel.app/",
      tech: ["css", "tailwind", "javascript", "react"],
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "A clean, responsive blog for content creators.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
      link: "",
      tech: ["css", "tailwind", "javascript", "react"],
    },
    {
      id: 4,
      title: "BuildMasters",
      description:
        "An online construction platform featuring user-friendly navigation.",
      image: build,
      link: "https://build-masters-liart.vercel.app/",
      tech: ["css", "tailwind", "javascript", "react"],
    },
  ];

  const techIcons = {
    css: "fab fa-css3-alt",
    tailwind: "fab fa-wind",
    javascript: "fab fa-js",
    react: "fab fa-react",
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <Link
            to={project.link}
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="relative bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto group transform transition-all duration-500 hover:-translate-y-2"
              style={{ animation: `slideIn ${0.3 + index * 0.1}s ease-out` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-indigo-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 z-10"></div>

              {/* Image */}
              <div className="relative w-full h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain z-0"
                />
              </div>

              {/* Content */}
              <div className="p-5 relative z-20">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-100 transition-colors duration-300 mt-1">
                  {project.description}
                </p>
                {/* Tech Icons */}
                <div className="mt-3 flex space-x-3">
                  {project.tech.map((tech, idx) => (
                    <i
                      key={idx}
                      className={`${techIcons[tech]} text-xl text-gray-600 group-hover:text-white transition-colors duration-300`}
                    ></i>
                  ))}
                </div>
                <span className="inline-block mt-3 px-4 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
