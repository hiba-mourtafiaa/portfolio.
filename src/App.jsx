
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import FeaturedProjects from "./components/FeaturedProjects"
import Technologies from "./components/Technologies"
import DesignProcess from "./components/DesignProcess"
import Contact from "./components/Contact"

import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <Navbar />
      <Hero />
      <About/>
      <Technologies/>
      <FeaturedProjects/>
      <DesignProcess/>
      <Contact/>
    </div>
  );
}

export default App;
