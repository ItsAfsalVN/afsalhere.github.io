import React, { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import TopNav from "./TopNav";

function Header({ isOpen, setIsOpen }) {
  const [showHeader, setShowHeader] = useState(true); // Start with header visible
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowHeader(true);
      } 
      // Hide header when scrolling down and past 100px
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 z-[100] right-0 z-50  px-[24px] xl:px-[200px] pt-[32px] flex justify-between items-center transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      <img src="../dist/logo.svg" alt="logo" className="w-[100px] xl:w-[120px] h-auto" />
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
     <TopNav/>
    </div>
  );
}

export default Header;