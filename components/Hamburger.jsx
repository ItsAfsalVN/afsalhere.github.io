import React from 'react';

function Hamburger({ isOpen, setIsOpen }) {
  return (
    <div
      className={`w-[56px] h-[66px] flex flex-col items-end justify-center gap-2 cursor-pointer lg:hidden`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Top line */}
      <span
        className={`
           h-[5px] bg-secondary block rounded-full
          transition-all duration-500 ease-in-out transform
          ${isOpen ? 'rotate-[-45deg] translate-y-[12px] w-[90%]' : 'w-full'}
        `}
      />

      {/* Middle line */}
      <span
        className={`
          w-3/4 h-[5px] bg-secondary block rounded-full
          transition-all duration-500 ease-in-out transform
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}
      />

      {/* Bottom line */}
      <span
        className={`
          h-[5px] bg-secondary block rounded-full
          transition-all duration-500 ease-in-out transform
          ${isOpen ? 'rotate-[45deg] -translate-y-[12px] w-[90%]' : 'w-1/2'}
        `}
      />
    </div>
  );
}

export default Hamburger;
