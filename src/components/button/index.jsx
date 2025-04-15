import React from "react";
import { motion } from "framer-motion";

const Button = () => {
  return (
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block bg-teal-500 text-white font-medium py-3 px-8 rounded-full hover:bg-teal-600 transition-colors duration-300"
    >
      Hire Me
    </motion.a>
  );
};

export default Button;