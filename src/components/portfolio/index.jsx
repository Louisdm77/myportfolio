import React from "react";

const Portfolio = () => {
  // Placeholder project data with Unsplash images
  const projects = [
    {
      id: 1,
      title: "E-Commerce Store",
      description: "A modern online store with seamless checkout.",
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Agency Landing Page",
      description: "A sleek landing page for a creative agency.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Portfolio Showcase",
      description: "A personal portfolio with dynamic animations.",
      image: "https://images.unsplash.com/photo-1516321310768-919677f7f0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "A clean, responsive blog for content creators.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;