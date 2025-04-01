import React from "react";
import GaugeChart from "react-gauge-chart";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import tailwind from "../../assets/images/tailwind.png";
import firebase from "../../assets/images/firebase.svg";
import { FaHtml5 } from "react-icons/fa";

const SkillsRating = () => {
  return (
    <div className="m-auto">
      <h2 className="text-center text-3xl mb-4 font-extrabold">Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 p-4 items-center">
        <div className="w-50 block text-center">
          <GaugeChart
            id="gauge-chart2"
            nrOfLevels={20}
            percent={0.9}
            className="w-full h-full"
          />
          <FaHtml5 className="text-6xl m-auto" />
          <p className="text-2xl font-bold mt-4 rolee">Html</p>
        </div>
        <div className="w-50 block text-center">
          <GaugeChart
            id="gauge-chart2"
            nrOfLevels={20}
            percent={0.8}
            className="w-full h-full"
          />
          <FaCss3Alt className="text-6xl m-auto" />
          <p className="text-2xl font-bold mt-4 rolee">Css</p>
        </div>
        <div className="w-50 block text-center">
          <GaugeChart
            id="gauge-chart2"
            nrOfLevels={20}
            percent={0.9}
            className="w-full h-full"
          />
          <img src={tailwind} alt="" className="w-30 h-15 m-auto" />
          <p className="text-2xl font-bold mt-4 rolee">Tailwind Css</p>
        </div>
        <div className="w-50 block text-center">
          <GaugeChart
            id="gauge-chart2"
            nrOfLevels={20}
            percent={0.8}
            className="w-full h-full"
          />
          <IoLogoJavascript className="text-6xl m-auto" />
          <p className="text-2xl font-bold mt-4 rolee">Javascript</p>
        </div>
        <div className="w-50 block text-center">
          <GaugeChart
            id="gauge-chart2"
            nrOfLevels={20}
            percent={0.8}
            className="w-full h-full"
          />
          <FaReact className="text-6xl m-auto" />
          <p className="text-2xl font-bold mt-4 rolee">React JS</p>
        </div>
        <div className="w-50 block text-center">
          <GaugeChart
            id="gauge-chart2"
            nrOfLevels={20}
            percent={0.7}
            className="w-full h-full"
          />
          <img src={firebase} alt="" className="w-30 h-15 m-auto" />
          <p className="text-2xl font-bold mt-4 rolee">Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsRating;
