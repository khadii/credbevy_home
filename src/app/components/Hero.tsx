import Link from "next/link";
import React from "react";
import { AiOutlineApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";

export default function Hero() {
    const sponsors = [
        { src: "/images/amazon.svg", alt: "Amazon" },
        { src: "/images/facebook.svg", alt: "Facebook" },
        { src: "/images/google.svg", alt: "Google" },
        { src: "/images/netflix.svg", alt: "Netflix" },
        { src: "/images/spotify.svg", alt: "Spotify" },
        { src: "/images/last.svg", alt: "Last" }
      ];

  return (
    <section className="w-full lg:pt-[111px] pt-[55px] px-4 flex justify-center ">
      <div className="max-w-7xl w-full">
        <div className="w-full items-center flex flex-col">
          {/* title */}
          <p className="text-myblack2  font-bold lg:text-8xl text-[40px] lg:max-w-6xl max-w-xl text-center lg:mb-8 mb-4">
            Get Matched to the Best Loan in Seconds
          </p>
          <h1 className="text-myblack font-medium  text-lg lg:text-2xl lg:max-w-[820px] max-w-sm text-center lg:mb-10 mb-[30px]">
            AI analyzes your profile and instantly connects you with the right
            lenders—fast, simple, and hassle-free.
          </h1>
          {/* dowloand buttons */}
          <div className="lg:flex  space-x-8 lg:mb-[15px] mb-[60px] w-full space-y-[14px] justify-center">
            <Link
              href={""}
              className="h-[66px] w-full flex items-center space-x-4 rounded-4xl bg-white justify-center py-[17px] lg:w-[184px]"
            >
              <BiLogoPlayStore size={32} className="" />
              <div>
                <p className="font-medium text-sm text-myblack2">Download on</p>
                <span className="font-semibold text-myblack2">Playstore</span>
              </div>
            </Link>
            <Link
              href={""}
              className="h-[66px] flex items-center space-x-4 rounded-4xl bg-myblack2 justify-center  py-[17px] w-full  lg:w-[184px]"
            >
              <AiOutlineApple size={32} className="text-mywhite" />
              <div>
                <p className="font-medium text-sm text-mywhite">Download on</p>
                <span className="font-semibold text-mywhite">App Store</span>
              </div>
            </Link>
          </div>
        </div>
        {/* phone images */}
        <div className="w-full lg:flex justify-center hidden mb-[79px]">
          <img
            src="/images/phones.svg"
            className="w-auto h-auto"
            alt="credbevy"
          />
        </div>
        <div className="w-full lg:hidden justify-center flex mb-[30px]">
          <img
            src="/images/phonesmobile.svg"
            className="w-auto h-auto"
            alt="credbevy"
          />
        </div>
        {/* sponsors */}
        <div className="w-full overflow-hidden relative">
      <div className="flex space-x-[45px] lg:space-x-[70px] animate-marquee items-center mb-[50px] lg:mb-[150px]">
        {sponsors.map((sponsor, index) => (
          <React.Fragment key={index}>
            {sponsors.map((s, i) => (
              <img 
                key={`${index}-${i}`}
                src={s.src} 
                alt={s.alt} 
                className="w-[128px] lg:w-auto h-auto mx-[22.5px]"
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
      </div>
    </section>
  );
}
