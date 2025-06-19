import React from "react";

function TopNav() {
  return (
    <ul className="hidden uppercase lg:flex items-center gap-[62px] text-[32px] xl:text-[54px]">
        <li className="cursor-pointer">home</li>
        <li className="cursor-pointer">about</li>
        <li className="cursor-pointer">works</li>
        <li className="cursor-pointer">contact</li>
      </ul>
  );
}

export default TopNav;
