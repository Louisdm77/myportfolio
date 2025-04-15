import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-10"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-4xl mx-auto text-gray-300 text-lg leading-relaxed bg-gray-800 p-10 rounded-2xl shadow-lg"
        >
          <p className="text-center">
            I’m a frontend developer passionate about crafting engaging digital experiences. I specialize in blending design and functionality to create intuitive, responsive applications that enhance user interactions. I enjoy tackling challenges such as optimizing performance and debugging issues to ensure seamless experiences. Collaboration with designers and fellow developers is key to my process, allowing me to bring creative ideas to life. Ultimately, my goal is to design user-friendly interfaces that make technology enjoyable and accessible for everyone.
          </p>
        </motion.div>
      </div>
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gray-800">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
        >
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            fill="#1F2937"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutMe;