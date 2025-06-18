import React from "react";

function HomeCumAbout() {
  return (
    <div className="w-full flex-1 relative">
      {/* Who I am */}
      <div className="">
        <span className="font-thin text-[44px]  lg:text-[50px] xl:text-[60px] block leading-[40px]">
          I<span className="font-sans">'</span>M
        </span>
        <span className="font-bold text-[91px] block leading-[64px] md:leading-[70px] lg:leading-[85px] xl:leading-[140px] md:text-[100px] lg:text-[120px] xl:text-[180px]">
          AFSAL
        </span>
        <span className="font-bold text-[91px] block leading-[64px] md:leading-[70px] lg:leading-[85px] xl:leading-[140px] md:text-[100px] lg:text-[120px] xl:text-[180px]">
          VN
        </span>
      </div>

      {/* Roles */}
      <div className="text-[72px] md:text-[86px] lg:text-[98px] xl:text-[160px] absolute bottom-0 left-0 z-[50]">
        <span className="leading-[60px] md:leading-[70px] lg:leading-[74px] xl:leading-[120px] block">MERN </span>
        <span className="leading-[60px] md:leading-[70px] lg:leading-[74px] xl:leading-[120px] block">
          DEVELOPER{" "}
        </span>
      </div>

      {/* floatig scroll down button */}
      <div className="absolute bottom-[150px] md:bottom-[100px] right-0 z-[50] w-[66px] md:w-[70px] xl:w-[100px] aspect-square border border-secondary rounded-full flex flex-col justify-center items-center gap-[7px]">
        <span className="text-secondary text-[7px] md:text-[10px] xl:text-[16px] text-center leading-[6px] md:leading-[10px] xl:leading-[16px]">
          SCROLL
          <br />
          DOWN
        </span>
        <img
          src="/icons/bottomArrow.svg"
          alt=""
          className="w-[20px] md:w-[24px] xl:w-[32px] aspect-square animate-bounce"
        />
      </div>

      {/* Hero Image */}
      <img
        src="../dist/images/HeroImage.png"
        alt="HeroImage"
        className="absolute bottom-0 left-0 w-screen md:hidden"
      />
      <img
        src="/images/HeroImageAlt.png"
        alt="HeroImage"
        className="hidden absolute bottom-0 left-0  md:block md:w-[90%] lg:w-[75%] xl:w-auto md:left-1/2 md:-translate-x-1/2 xl:-translate-x-1/4 md:aspect-square md:object-cover "
      />

      {/* Download CV Button */}
      <button className=" absolute bottom-[64px] md:bottom-1 right-0 rounded-[6px] px-2 py-3 md:px-3 xl:px-4 bg-secondary text-primary flex justify-center items-center gap-[10px]">
        <span className="text-[17px] md:text-[22px] xl:text-[30px]">DOWNLOAD CV</span>
        <img
          src="../dist/icons/bottomRightArrow.svg"
          alt=""
          className="w-[18px] md:w-[21px] aspect-square"
        />
      </button>
    </div>
  );
}

export default HomeCumAbout;
