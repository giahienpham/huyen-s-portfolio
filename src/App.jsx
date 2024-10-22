import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Arts from "./components/Arts";

const App = () => {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Arts/>
    </main>
  );
};

export default App;
