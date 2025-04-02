import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Me from "./components/me";
import Services from "./components/services";
import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./components/aboutMe";
import SkillsRating from "./components/skillsRating";
import Portfolio from "./components/portfolio";

function App() {
  return (
    <Router>
      {" "}
      <div className="w-full ">
        <NavBar />
        <Me />
        <Services />
        <AboutMe />
        <SkillsRating />
        <Portfolio/>
      </div>
    </Router>
  );
}

export default App;
