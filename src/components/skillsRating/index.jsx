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
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-center text-3xl mb-6 font-extrabold">Technologies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
        <div className="w-full max-w-[150px] text-center">
          <GaugeChart
            id="gauge-chart-html"
            nrOfLevels={20}
            percent={0.9}
            className="w-full h-auto"
            needleColor="#fd6f00"
            colors={["#FF5F6D", "#FFC107", "#00C853"]}
          />
          <FaHtml5 className="text-4xl sm:text-5xl mx-auto mt-2" />
          <p className="text-lg sm:text-xl font-bold mt-2">HTML</p>
        </div>
        <div className="w-full max-w-[150px] text-center">
          <GaugeChart
            id="gauge-chart-css"
            nrOfLevels={20}
            percent={0.8}
            className="w-full h-auto"
            needleColor="#fd6f00"
            colors={["#FF5F6D", "#FFC107", "#00C853"]}
          />
          <FaCss3Alt className="text-4xl sm:text-5xl mx-auto mt-2" />
          <p className="text-lg sm:text-xl font-bold mt-2">CSS</p>
        </div>
        <div className="w-full max-w-[150px] text-center">
          <GaugeChart
            id="gauge-chart-tailwind"
            nrOfLevels={20}
            percent={0.9}
            className="w-full h-auto"
            needleColor="#fd6f00"
            colors={["#FF5F6D", "#FFC107", "#00C853"]}
          />
          <img
            src={tailwind}
            alt="Tailwind"
            className="w-16 sm:w-20  h-auto mx-auto mt-2"
          />
          <p className="text-lg sm:text-xl font-bold mt-2">Tailwind</p>
        </div>
        <div className="w-full max-w-[150px] text-center">
          <GaugeChart
            id="gauge-chart-js"
            nrOfLevels={20}
            percent={0.8}
            className="w-full h-auto"
            needleColor="#fd6f00"
            colors={["#FF5F6D", "#FFC107", "#00C853"]}
          />
          <IoLogoJavascript className="text-4xl sm:text-5xl mx-auto mt-2" />
          <p className="text-lg sm:text-xl font-bold mt-2">JavaScript</p>
        </div>
        <div className="w-full max-w-[150px] text-center">
          <GaugeChart
            id="gauge-chart-react"
            nrOfLevels={20}
            percent={0.8}
            className="w-full h-auto"
            needleColor="#fd6f00"
            colors={["#FF5F6D", "#FFC107", "#00C853"]}
          />
          <FaReact className="text-4xl sm:text-5xl mx-auto mt-2" />
          <p className="text-lg sm:text-xl font-bold mt-2">React JS</p>
        </div>
        <div className="w-full max-w-[150px] text-center">
          <GaugeChart
            id="gauge-chart-firebase"
            nrOfLevels={20}
            percent={0.7}
            className="w-full h-auto"
            needleColor="#fd6f00"
            colors={["#FF5F6D", "#FFC107", "#00C853"]}
          />
          <img
            src={firebase}
            alt="Firebase"
            className="w-16 sm:w-20 md:w-25 h-auto mx-auto mt-2"
          />
          <p className="text-lg sm:text-xl font-bold mt-8">Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsRating;
