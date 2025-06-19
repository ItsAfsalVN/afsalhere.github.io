import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HomeCumAbout from "../pages/HomeCumAbout";
import Footer from "../components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[200vh] bg-primary text-secondary flex flex-col">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Homepage and About section - because the animation is connected */}
      <HomeCumAbout />
      
      {/* Footer */}
      <Footer />

      {/* Overlay for the mobile menu */}
    </div>
  );
}

export default App;