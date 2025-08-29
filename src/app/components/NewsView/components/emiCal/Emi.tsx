import Header from "@/app/components/major/header";
import React from "react";
import Sectionthree from "../T&c/sectionTwo";
import Image from "next/image";
import Footertwo from "@/app/components/major/Footertwo";
import Sectionfive from "./sectionFour";

export default function Emi() {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center px-[15px] lg:px-[100px] pt-[49px] lg:pt-[129px] mb-[49px] lg:mb-[96px] space-y-6">
        <p className="text-mygrey2 font-semibold text-[20px] lg:text-[24px] leading-[100%] text-center">
          Privacy
        </p>
        <p className="text-myblack font-bold text-[48px] lg:text-[96px] leading-[100%] text-center max-w-4xl">
          EMI Calculator For Loan Offers
        </p>
        <p className="text-mygrey2 font-medium text-[18px] lg:text-[24px] leading-[100%] text-center">
          Calculate different loan amounts that you can get
        </p>
      </div>

      {/* Responsive Image Section */}
      <div className="w-full flex justify-center xl:hidden">
        <Image
          src="/calculator.png"
          alt="credbevy"
          priority
          width={1440}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-full relative h-[300px] md:h-[500px] lg:h-[600px] xl:flex hidden">
        <Image
          src="/calculator.png"
          alt="credbevy"
          priority
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>

      {/* Bar & Cal Image Section */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[24px] px-[15px] lg:px-24 py-[40px] lg:py-[80px] w-full">
          <div className="flex justify-center md:justify-end">
            <Image
              src="/cal.svg"
              alt="credbevy"
              priority
              width={614}
              height={692}
              className="w-full max-w-[400px] md:max-w-[614px] h-auto"
            />
          </div>
          <div className="flex justify-center md:justify-start">
            <Image
              src="/bar.svg"
              alt="credbevy"
              priority
              width={602}
              height={692}
              className="w-full max-w-[400px] md:max-w-[602px] h-auto"
            />
          </div>
        </div>
      </div>

      {/* Tab Section */}
      <div className="flex w-full justify-center px-[15px]">
        <Image
          src="/tab.svg"
          alt="credbevy"
          priority
          width={1240}
          height={618}
          className="w-full max-w-[1240px] h-auto"
        />
      </div>

      <Sectionfive />
      <Footertwo />
    </div>
  );
}
