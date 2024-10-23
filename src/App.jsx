import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Arts from "./components/Arts";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Arts/>
      <About/>
      <Mission/>
      <Expertise/>
      <Recommendations/>
      <Contact/>
    </main>
  );
};

export default App;
