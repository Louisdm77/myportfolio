import { useState } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Me from "./components/me";
import Services from "./components/services";
import { BrowserRouter as Router } from "react-router-dom";
import AboutMe from "./components/aboutMe";
import SkillsRating from "./components/skillsRating";

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
      </div>
    </Router>
  );
}

export default App;
