import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../button";
import logo from "../../assets/images/logo.png";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavBarShow = () => {
    setShowNav(!showNav);
  };

  const navItem = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/" },
    { name: "About me", link: "/" },
    { name: "Portfolio", link: "/" },
    { name: "Contact me", link: "/" },
  ];

  return (
    <div className="p-2 flex justify-between items-center relative ">
      <div className="lg:hidden">
        <div className=" text-xl">
          <GiHamburgerMenu
            className={`${showNav ? "hidden" : "block"}`}
            onClick={handleNavBarShow}
          />
          <FaTimes
            className={`${!showNav ? "hidden" : "block"}`}
            onClick={handleNavBarShow}
          />
        </div>
        <div
          className={`w-full p-3  mt-4  z-50 absolute left-0 ${
            !showNav ? "hidden" : "block"
          }`}
        >
          <ul className="block lg:hidden text-white bg-black animate__animated animate__slideInDown">
            {navItem.map((item, index) => (
              <li key={index} className="p-2 hover:text-black hover:bg-white">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="logo flex justify-center flex-1 lg:flex-none lg:ml-12 lg:justify-start">
        <img
          src={logo}
          alt="logo"
          className="w-16 h-16 object-contain lg:h-20 lg:w-32"
        />
      </div>

      <div className="hidden lg:flex items-center text-gray-300 font-semibold text-2xl">
        <ul className="hidden lg:flex items-center">
          {navItem.map((item, index) => (
            <li key={index} className="ml-10 hover:text-orange-400">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {" "}
        <Button />
      </div>
    </div>
  );
};

export default NavBar;
