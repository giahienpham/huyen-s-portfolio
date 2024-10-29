import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Arts from "./components/Arts";
import About from "./components/About";
import Mission from "./components/Mission";
import Expertise from "./components/Expertise";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Honors from "./components/Honors";
import Debate from "./components/Debate";

const App = () => {
  return (
    <main className="overflow-y-hidden antialiased">
      <HeroSection />
      <Navbar />
      <About />
      <Honors />
      <Mission />
      <Arts />
      <Debate />
      <Expertise />
      <Recommendations />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
