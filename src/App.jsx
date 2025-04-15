import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/navBar";
import Me from "./components/me";
import Services from "./components/services";
import AboutMe from "./components/aboutMe";
import SkillsRating from "./components/skillsRating";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonial";
import ContactMe from "./components/contactMe";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="w-full bg-gray-900 text-white font-sans overflow-x-hidden">
        <NavBar />
        <Me />
        <Services />
        <AboutMe />
        <SkillsRating />
        <Portfolio />
        <Testimonials />
        <ContactMe />
        <Footer />
      </div>
    </Router>
  );
}

export default App;