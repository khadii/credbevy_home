import Image from "next/image";
import React from "react";
import CustomButton, { CustomButtonTwo } from "../../customButton";

export default function SectionFour() {
  return (
    <section className="w-full flex justify-center">
      <div className="px-6 sm:px-[15px] lg:px-24 grid grid-cols-1 lg:grid-cols-2 items-center mb-24 sm:mb-[270px]  gap-10 lg:gap-[126px]">
        <div>
          <p className="font-bold text-[32px] sm:text-[40px] lg:text-[64px] leading-tight text-myblack max-w-full  text-center sm:text-left lg:max-w-[553px]">
          Mortgage Loans
          </p>
          <h1 className="text-myyellow font-semibold text-base leading-none tracking-normal mb-6 ">
          Make Your Dream Home a Reality
          </h1>

          <p className="font-medium text-[14px] sm:text-base leading-relaxed text-justify text-myblackmax-w-full lg:max-w-[553px]  mb-3 lg:mb-6 ">
          Secure your home with affordable mortgage solutions. We offer flexible terms, competitive interest rates, and expert guidance every step of the way.
          </p>
          <div className="space-y-[17px]">
           <div className="w-full flex items-center gap-[12px]">
           <Image
            src={"/list.svg"}
            alt={"credbevy"}
            priority={true}
            width={24}
            height={24}
         
          />   <img/>
           <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
           Up to 90% financing
            </p>
           </div>
           <div className="w-full flex items-center gap-[12px]">
           <Image
            src={"/list.svg"}
            alt={"credbevy"}
            priority={true}
            width={24}
            height={24}
         
          />   <img/>
           <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
           Fixed & variable rate options
            </p>
           </div>
           <div className="w-full flex items-center gap-[12px]">
           <Image
            src={"/list.svg"}
            alt={"credbevy"}
            priority={true}
            width={24}
            height={24}
         
          />   <img/>
           <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
           Simple approval process
            </p>
           </div>
           <div className="w-full flex items-center gap-[12px]">
           <Image
            src={"/list.svg"}
            alt={"credbevy"}
            priority={true}
            width={24}
            height={24}
         
          />   <img/>
           <p className=" text-myblack font-medium text-sm leading-[150%] tracking-normal">
           Expert home loan advisors
            </p>
           </div>
          </div>
          <CustomButtonTwo
            text={"Apply Now"}
            className="w-full sm:w-[342px]  mt-8 lg:mt-[68px] "
          />
        </div>
        <div className="w-full flex justify-center">
          <Image
            src={"/mortgadge.svg"}
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
