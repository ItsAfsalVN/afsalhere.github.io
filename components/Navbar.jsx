import React from 'react'
import MarqueeServices from './MarqueeServices'

function Navbar({ isOpen, setIsOpen }) {
  return (
    <div className={` select-none fixed top-0 uppercase left-0 right-0 z-[60] w-screen pt-[32px] px-[24px] bg-primary text-secondary flex justify-center items-center transition-all duration-500 ease-in-out ${isOpen ? 'h-dvh opacity-100' : 'h-0 opacity-0'} overflow-hidden`}>
      <ul className='text-[40px] font-bold flex flex-col gap-[40px] text-secondary text-center'>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">Home</li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">About</li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">Works</li>
        <li className="cursor-pointer hover:opacity-70 transition-opacity">Contact</li>
          </ul>
          
        <MarqueeServices />
    </div>
  )
}

export default Navbar