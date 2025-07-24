import React from "react";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa";
import tailwind from "../../assets/images/tailwind.png";
import firebase from "../../assets/images/firebase.svg";

const SkillsRating = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      description: "Clean, semantic structure for SEO-friendly pages.",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      description: "Styled layouts that work across devices.",
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      isImage: true,
      description: "Utility-first styling for fast and scalable UIs.",
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript />,
      description: "Dynamic interactions and application logic.",
    },
    {
      name: "React JS",
      icon: <FaReact />,
      description: "Reusable components and smooth single-page apps.",
    },
    {
      name: "Firebase",
      icon: firebase,
      isImage: true,
      description: "Real-time database, auth, and backend services.",
    },
  ];

  return (
    <section id="skills" className="pb-16 bg-gray-800">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-teal-500/30 transition-shadow text-center"
            >
              {skill.isImage ? (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mb-3 object-contain"
                />
              ) : (
                <div className="text-4xl text-teal-400 mb-3">{skill.icon}</div>
              )}
              <span className="text-white font-semibold text-lg mb-1">
                {skill.name}
              </span>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsRating;
