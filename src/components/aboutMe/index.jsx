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
          className="max-w-3xl mb-8 l mx-auto text-gray-300 text-lg leading-relaxed bg-gray-800 p-10 rounded-2xl shadow-lg"
        >
          <p className="text-center">
            I help businesses grow online with high-performing websites that
            rank, convert, and retain customers. As a frontend developer, I
            don’t just write code, I build responsive, fast, and SEO-friendly
            websites designed to turn visitors into buyers. Whether you need a
            landing page that ranks on Google, an e-commerce store that sells
            more, or a user interface that keeps people engaged, I focus on
            results that matter, more traffic, better engagement, and increased
            revenue. Let’s turn your website into your most powerful sales tool.
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
