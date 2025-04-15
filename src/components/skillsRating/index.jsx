import React from "react";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa";
import tailwind from "../../assets/images/tailwind.png";
import firebase from "../../assets/images/firebase.svg";

const SkillsRating = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, percent: 90 },
    { name: "CSS", icon: <FaCss3Alt />, percent: 80 },
    { name: "Tailwind", icon: tailwind, isImage: true, percent: 90 },
    { name: "JavaScript", icon: <IoLogoJavascript />, percent: 80 },
    { name: "React JS", icon: <FaReact />, percent: 80 },
    { name: "Firebase", icon: firebase, isImage: true, percent: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My Skills
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
              className="flex items-center space-x-4 bg-gray-900 p-4 rounded-xl shadow-lg"
            >
              {skill.isImage ? (
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
              ) : (
                <div className="text-4xl text-teal-500">{skill.icon}</div>
              )}
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-gray-400">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 1.5, ease: "easeOut" }}
                    className="bg-teal-500 h-3 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsRating;