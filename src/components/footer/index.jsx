import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About Me", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact Me", id: "contact" },
  ];

  return (
    <footer id="footer" className="text-gray-300 py-12">
      <div className="flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-20" />
      </div>
      <div>
        <div className="grid gap-0 p-2 md:gap-4 grid-cols-5 text-sm md:w-[50%] m-auto">
          {links.map((item, idx) => (
            <Link
              key={idx}
              to={`#${item.id}`}
              className="hover:text-orange-400 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>
          Email:{" "}
          <a href="mailto:danakwaji3@gmail.com" className="hover:text-white">
            danakwaji3@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+15559876543" className="hover:text-white">
            +234815390524
          </a>
        </p>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
