import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About Me", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact Me", id: "contact" },
  ];

  return (
    <footer id="footer" className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <img src={logo} alt="Logo" className="h-16" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-3 sm:grid-cols-6 gap-4 text-center text-gray-300 mb-8"
        >
          {links.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.id}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="hover:text-teal-500 transition-colors duration-300"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center text-gray-400 text-sm mb-6"
        >
          <p>
            Email:{" "}
            <a href="mailto:danakwaji3@gmail.com" className="hover:text-teal-500">
              danakwaji3@gmail.com
            </a>
          </p>
          {/* <p>
            Phone:{" "}
            <a href="tel:+234815390524" className="hover:text-teal-500">
              +2348135390524
            </a>
          </p> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
          <motion.a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-teal-500"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-teal-500"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-teal-500"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-2xl hover:text-teal-500"
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;