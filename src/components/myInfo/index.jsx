import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebookF } from "react-icons/fa";
import Button from "../button"
import MyImage from "../../assets/images/myimage.png";

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
    <section id="home" className="min-h-screen flex items-center py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
        >
          <h3 className="text-lg lg:text-2xl text-gray-400 mb-2">Hi, I am</h3>
          <h2 className="text-3xl lg:text-5xl font-bold text-teal-500 mb-4">
            Akwaji Dan Uke
          </h2>
          <h3 className="text-2xl lg:text-4xl font-semibold text-white mb-6">
            FrontEnd Developer
          </h3>
          {/* Social Media */}
          <ul className="flex justify-center lg:justify-start gap-4 text-2xl mb-6">
            {socialMedia.map((media, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="border border-gray-300 rounded-full p-2 hover:bg-teal-500 hover:border-teal-500 transition-colors duration-300"
              >
                <a href={media.link} target="_blank" rel="noopener noreferrer">
                  {media.icon}
                </a>
              </motion.li>
            ))}
          </ul>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button />
            <motion.a
              href="/path-to-your-cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-300 font-semibold py-2 px-6 rounded-lg hover:bg-teal-500 hover:border-teal-500 hover:text-white transition-colors duration-300"
            >
              Download CV
            </motion.a>
          </div>
          {/* History Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-gray-800 rounded-xl p-6 mt-8 flex justify-around"
          >
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-teal-500">{item.number}</p>
                <p className="text-gray-400">{item.achievement}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={MyImage}
            alt="Akwaji Dan"
            className="w-3/4 lg:w-2/3 rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Me;