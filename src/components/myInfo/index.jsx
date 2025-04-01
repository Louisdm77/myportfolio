import React from "react";
import "animate.css";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../button";

const MyInfo = () => {
  const socialMedia = [
    { icon: <FaInstagram />, link: "/" },
    { icon: <FiTwitter />, link: "/" },
    { icon: <FaLinkedin />, link: "/" },
    { icon: <FaFacebookF />, link: "/" },
  ];

  const history = [
    {
      number: "2+",
      achievement: "Experience",
    },
    {
      number: "20+",
      achievement: "Projects Done",
    },
    {
      number: "20+",
      achievement: "Happy Clients",
    },
  ];

  return (
    <div className="w-full mt-4 z-0 lg:text-start text-center">
      <div className="text-gray-400">
        <h3 className="text-lg mb-4 animate__animated animate__slideInLeft lg:text-2xl">
          Hi, I am
        </h3>
        <h2 className="text-2xl font-semibold animate__animated animate__slideInRight lg:text-3xl">
          Akwaji Dan Uke
        </h2>
      </div>

      <div>
        <h3 className="text-3xl font-bold animate__animated animate__zoomIn mt-4 lg:text-7xl role">
          FrontEnd Developer
        </h3>
      </div>

      <div className="w-full max-w-xs mx-auto mt-6 text-gray-300 lg:max-w-[20%] lg:ml-0">
        <ul className="flex justify-center gap-4 text-xl lg:justify-start">
          {socialMedia.map((media, index) => (
            <li
              key={index}
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-700 transition-colors"
            >
              <Link to={media.link}>{media.icon}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-sm mx-auto mt-8 flex flex-col gap-4 lg:flex-row lg:max-w-md lg:ml-0 lg:gap-6">
        <Button />
        <button className="border-2 border-gray-300 py-2 px-6 cursor-pointer rounded hover:bg-gray-700 transition-colors lg:py-4 lg:px-16">
          Download CV
        </button>
      </div>

      <div className="bg-gray-900 rounded-xl lg:max-w-[70%] p-4 mt-6">
        <ul className="flex justify-between items-center   ">
          {history.map((item, index) => {
            return (
              <li className={``}>
                <p className="role text-lg font-extrabold text-start lg:text-2xl">
                  {item.number}
                </p>
                <p className="lg:text-2xl text-sm">{item.achievement}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MyInfo;
