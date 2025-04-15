import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Button from "../button";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavBarShow = () => {
    setShowNav(!showNav);
  };

  const navItem = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-md py-4"
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="logo" className="h-12 object-contain" />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10 text-gray-300 font-medium">
          {navItem.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative text-lg hover:text-teal-500 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </motion.a>
          ))}
          <Button />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="text-3xl text-teal-500 cursor-pointer"
            onClick={handleNavBarShow}
          >
            {showNav ? <FaTimes /> : <GiHamburgerMenu />}
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {showNav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-16 left-0 w-full bg-gray-800/90 backdrop-blur-md p-6 lg:hidden"
          >
            <ul className="flex flex-col space-y-6 text-center text-gray-300">
              {navItem.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a
                    href={item.link}
                    className="block text-lg hover:text-teal-500 transition-colors duration-300"
                    onClick={handleNavBarShow}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItem.length * 0.1, duration: 0.3 }}
                className="mt-6"
              >
                <Button />
              </motion.div>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavBar;