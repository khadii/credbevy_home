import Link from "next/link";
import React from "react";
import { AiOutlineApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
import Image from "next/image";

export default function Hero() {
  const sponsors = [
    { src: "/images/amazon.svg", alt: "Amazon" },
    { src: "/images/facebook.svg", alt: "Facebook" },
    { src: "/images/google.svg", alt: "Google" },
    { src: "/images/netflix.svg", alt: "Netflix" },
    { src: "/images/spotify.svg", alt: "Spotify" },
    { src: "/images/last.svg", alt: "Last" },
  ];

  return (
    <section className="w-full lg:pt-[111px] pt-[55px] px-4 flex justify-center  relative">
     <div className="absolute top-32 left-0 w-12 h-12  rounded-full bg-[#D3FBFF] -z-10  lg:hidden"></div>

<div className="absolute top-24 right-0 w-12 h-12  rounded-full bg-[#FFD3ED] -z-10  lg:hidden"></div>

      <div className=" w-full ">
        
        <div className="w-full items-center flex flex-col">
          {/* title */}
      <div className="relative">
      <p className="text-myblack2  font-bold lg:text-8xl text-[40px] lg:max-w-6xl max-w-xl text-center lg:mb-8 mb-4 lg:hidden leading-[1.8]">
            Get Matched to the Best Loan in Seconds
          </p>
          <div className="absolute top-20 left-24 w-5 h-5  rounded-full bg-[#f5bcf5] -z-10  lg:hidden"></div>
      </div>
          <div className="relative">
            {" "}
            <p className="text-myblack2 font-bold lg:text-8xl text-[40px] lg:max-w-6xl max-w-xl text-center lg:mb-8 mb-4 lg:leading-[1.6]  hidden lg:flex">
              Get Matched to the Best Loan in Seconds
            </p>
            <div className="absolute top-16 left-44 w-6 h-6  lg:w-8  lg:h-8 rounded-full bg-[#f5bcf5] -z-10 hidden lg:flex"></div>
            <div className="absolute -top-10 right-0 w-6 h-6  lg:w-32  lg:h-32 rounded-full bg-[#FFD3ED] -z-10 hidden lg:flex"></div>
            <div className="absolute top-7 -left-44 w-6 h-6  lg:w-32  lg:h-32 rounded-full bg-[#D3FBFF] -z-10 hidden lg:flex"></div>
          </div>
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
        <div className="w-full md:flex justify-center hidden mb-[79px]">
        <Image
      src="/images/phones.svg"
      alt="credbevy"

  height={843}
  width={1440}
    />
        </div>
        <div className="w-full md:hidden justify-center flex mb-[30px]">
          <Image
            src="/images/phonesmobile.svg"
            alt="credbevy"

  height={310}
  width={530}
    />
        </div>
        {/* sponsors */}
        <div className="w-full overflow-hidden relative">
          <div className="flex space-x-[45px] lg:space-x-[70px] animate-marquee items-center mb-[50px] lg:mb-[150px]">
            {sponsors.map((sponsor, index) => (
              <React.Fragment key={index}>
                {sponsors.map((s, i) => (
                  <Image
                    key={`${index}-${i}`}
                    src={s.src}
                    alt={s.alt}
                    className="w-[128px] lg:w-auto h-auto mx-[22.5px]"
                    height={55}
                    width={197}
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
