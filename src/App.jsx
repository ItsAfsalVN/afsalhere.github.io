import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HomeCumAbout from "../pages/HomeCumAbout";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-primary h-dvh px-[24px] xl:px-[200px] pt-[98px] xl:pt-[120px] pb-[32px] text-secondary flex flex-col">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Homepage and About section - because the animation is connected */}
      <HomeCumAbout/>
    </div>
  );
}

export default App;