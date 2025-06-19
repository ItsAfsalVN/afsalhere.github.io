import React from "react";

function HomeCumAbout() {
  return (
    <div className="h-screen w-full">
      {/* Hero Image */}
      <img
        src="./images/HeroImage.png"
        alt="HeroImage"
        className="absolute w-full z-[50] bottom-0 left-0 object-[center_60px] md:hidden"
      />
      <img
        src="./images/HeroImageAlt.png"
        alt="HeroImage"
        className="hidden md:block  md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:z-[50] md:object-[center_60px] xl:w-[45%]"
      />
      <div className="h-full w-full px-[24px] xl:px-[300px] pt-[98px] xl:pt-[140px] pb-[32px] flex flex-col justify-between relative">
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

        <div className="flex relative">
          {/* roles */}
          <div className="text-[72px] md:text-[86px] lg:text-[98px] xl:text-[160px] z-[50]">
            <span className="leading-[60px] md:leading-[70px] lg:leading-[74px] xl:leading-[120px] block">
              MERN{" "}
            </span>
            <span className="leading-[60px] md:leading-[70px] lg:leading-[74px] xl:leading-[120px] block">
              DEVELOPER{" "}
            </span>
          </div>

          <div className="z-[100] absolute right-0 bottom-[64px] md:bottom-2">
            {/* floatig scroll down button */}
            <div className="z-[100] w-[66px] absolute right-0 bottom-16 md:bottom-20 xl:bottom-28 md:w-[70px] xl:w-[100px] aspect-square border border-secondary rounded-full flex flex-col justify-center items-center gap-[7px]">
              <span className="text-secondary text-[7px] md:text-[10px] xl:text-[16px] text-center leading-[6px] md:leading-[10px] xl:leading-[16px]">
                SCROLL
                <br />
                DOWN
              </span>
              <img
                src="./icons/bottomArrow.svg"
                alt=""
                className="w-[20px] md:w-[24px] xl:w-[32px] aspect-square animate-bounce"
              />
            </div>

            {/* Download CV Button */}
            <button className="rounded-[6px] px-2 py-3 md:px-3 xl:px-4 bg-secondary text-primary flex justify-center items-center gap-[10px]">
              <span className="text-[17px] md:text-[22px] xl:text-[40px]">
                DOWNLOAD CV
              </span>
              <img
                src="./icons/bottomRightArrow.svg"
                alt=""
                className="w-[18px] md:w-[21px] aspect-square"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCumAbout;
