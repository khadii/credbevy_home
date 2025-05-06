import Image from "next/image";
import React from "react";
import CustomButton, { CustomButtonTwo } from "../../customButton";

export default function SectionTwo() {
  return (
    <section className="w-full flex justify-center">
      <div className="px-6 sm:px-[15px] lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center py-12 lg:py-[80px] gap-10 lg:gap-[126px]">
        <div>
          <p className="font-bold text-[32px] sm:text-[40px] lg:text-[64px] leading-tight text-myblack mb-6 max-w-full  text-center sm:text-left lg:max-w-[553px]">
            Shaping the Future of Lending
          </p>
          <p className="font-medium text-[14px] sm:text-base leading-relaxed text-justify text-myblack mb-8 lg:mb-[56px] max-w-full lg:max-w-[553px]">
            We are revolutionizing the way people access loans by leveraging
            cutting-edge technology and data-driven insights. Our mission is to make
            credit more accessible to everyone, regardless of their background or
            financial history. We’re building an AI-powered loan marketplace that
            connects borrowers with trusted lenders and empowers individuals and
            businesses to achieve their financial goals. If you’re passionate about
            making a difference in the fintech space and thrive in a fast-paced,
            innovative environment, Credbevy is the place for you!
          </p>
          <CustomButtonTwo text={"See Open Positions"} className="w-full sm:w-[342px]" />
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={"/joinus2.svg"}
            alt={"credbevy"}
            priority={true}
            width={558}
            height={622}
            className="w-full max-w-[558px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
