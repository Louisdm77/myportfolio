import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
} from "react-icons/fa";
import Button from "../button";
import MyImage from "../../assets/images/deepee.jpg";

const Me = () => {
  const socialMedia = [
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaLinkedin />, link: "https://linkedin.com" },
    { icon: <FaFacebookF />, link: "https://facebook.com" },
  ];

  const history = [
    { number: "2+", achievement: "Years Experience" },
    { number: "20+", achievement: "Projects Done" },
    { number: "20+", achievement: "Happy Clients" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen py-20 flex items-center"
    >
      <div className="container mx-auto px-8 relative z-10">
        {/* Decorative Background Shape */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl z-0"></div>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center relative z-10">
          {/* Image with Decorative Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-12"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 ">
              <img
                src={MyImage}
                alt="Akwaji Dan"
                className="w-full h-full rounded-full  object-cover border-4 border-teal-500 shadow-2xl -rotate-24"
              />
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-teal-500 rounded-full"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl text-gray-400 mb-3">Hello, I am</h3>
            <h2 className="text-5xl lg:text-6xl font-bold text-teal-500 mb-4">
              Akwaji Dan
            </h2>
            <h3 className="text-2xl lg:text-4xl font-semibold mb-6">
              I build fast, responsive websites that help businesses look
              professional and convert more customers
            </h3>
          </motion.div>

          {/* Social Media */}
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex gap-5 text-3xl mb-8"
          >
            {socialMedia.map((media, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                className="border border-gray-300 rounded-full p-3 hover:bg-teal-500 hover:border-teal-500 transition-colors duration-300"
              >
                <a href={media.link} target="_blank" rel="noopener noreferrer">
                  {media.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center gap-5 mb-10"
          >
            <Button />
            {/* <motion.a
              href="/path-to-your-cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-300 font-medium py-3 px-8 rounded-full hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-colors duration-300"
            >
              Download CV
            </motion.a> */}
          </motion.div>

          {/* History Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-10 bg-gray-800 rounded-xl p-6"
          >
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-teal-500">
                  {item.number}
                </p>
                <p className="text-gray-400 text-sm">{item.achievement}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Me;
