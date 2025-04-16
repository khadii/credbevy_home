import Image from "next/image";
import React from "react";

export default function SectionFour() {
  return (
    <section className="w-full flex justify-center px-[15px] lg:px-24px ">
      <div className="lg:pb-[299px] w-full flex justify-center lg:gap-48 pb-[151px]  gap-[24px] flex-col md:flex-row max-w-7xl">
        {/* //section one */}
        <div className="lg:pt-[40px] pt-0 ">
          <p className="font-bold lg:text-[64px] text-myblack leading-[150%] tracking-[0%] lg:mb-6 text-[40px] mb-[16px]">
            Our Vision
          </p>
          <p className="font-inter font-medium lg:text-[16px] leading-[210%] tracking-[0%] text-justify  max-w-[555px] text-[14px] text-myblack">
            We envision a world where financial access is fair, inclusive, and
            convenient. Our goal is to make loan options more accessible to
            everyone, no matter their background or financial history. By
            continually evolving our platform, we strive to improve the
            financial well-being of individuals and businesses alike.
          </p>
        </div>
        {/* section2 */}
        <div className="max-w-[555px]">
          <Image
            src={"/images/vision.svg"}
            alt={"credbevy"}
            height={542}
            width={558}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
